# Research Showcase Playbook
### Design pillars, animation principles, and research-communication patterns

**Source studied:** Anthropic Institute, *Scenarios for our Economic Future* (Econ Scenario Explorer v1.0, Sept 2026)
**Page:** anthropic.com/institute/econ-scenarios
**Paper behind it:** Korinek, Jones, Sacher, Cotter, McCrory (2026), *Economic Scenarios for Transformative AI*, The Anthropic Institute Working Paper No. 2026-02
**Method:** Page text fetched, 41-frame sample (1 fps) of a 41s scroll recording, full paper read.
**Purpose:** Reusable spec for my own small research projects (investment strategies, statistical modelling, etc.) shown on my website.

> **Confidence key**
> **[Observed]** seen in the recording or page text.
> **[Sampled]** pixel colour taken from a video frame, so approximate.
> **[Suggested]** my recommendation for implementation. Not measured from the site.
> Easing curves, durations, and library choice were not measurable from the video.

---

## Part 1. The one-sentence thesis

The page turns a model into a story. A reader scrolls, one idea changes per step, and the same objects morph through every stage. Then the reader gets control of the inputs.

Everything else in this file supports that sentence.

---

## Part 2. Design pillars

### 2.1 Lab-notebook canvas [Observed]
- Warm off-white paper background. [Sampled] about `#f7f5f2`.
- Faint grid lines behind all content. The lines are slightly uneven, like graph paper drawn by hand.
- Theme colour in page metadata is `#141413` (near-black, warm).
- Effect: the page feels like a working document, not a product ad.

### 2.2 Hand-made texture on every data mark [Observed]
- Tiles look like watercolor or marker. Edges are rough and fill is uneven.
- Forecast lines are dashed with a sketchy stroke.
- Bars have a rough gray or green fill, not flat vector fill.
- Effect: signals "this is a model, not the truth." It softens the authority of numbers.
- **[Suggested]** Build with SVG `feTurbulence` plus `feDisplacementMap` filters, or pre-rendered texture PNG masks applied to rects.

### 2.3 Semantic colour, very few hues [Observed]
Each colour means one thing and keeps that meaning on the whole page.

| Meaning | Colour (approx.) |
|---|---|
| Task unchanged by AI | Muted beige/gray |
| Task augmented | Soft purple |
| Task automated | Soft blue |
| New task created | Warm yellow/orange |
| Modest scenario | Blue [Sampled] about `#8ab6e5` |
| Substantial scenario | Olive green |
| Extreme scenario | Pink [Sampled] about `#f3abc4` |
| Labor (share bar) | Green |
| Capital (share bar) | Gray |
| Knowledge workers (Sankey) | Amber/orange |
| All other workers (Sankey) | Light blue |
| Displaced (Sankey) | Red dashed |

Rules:
- Muted, low-saturation, slightly chalky.
- Never more than 4 task colours in one view.
- A legend sits at the bottom of every chart that uses colour.
- Colour is not the only carrier of meaning. Labels sit beside marks.

### 2.4 Editorial typography [Observed]
- Serif for body copy and large display headings.
- Bold sans-serif for card titles and chart titles.
- Small light sans for axis labels, legends, and annotations.
- A drop cap opens the main body text.
- Section kickers read "Finding 1: GDP growth" in lighter weight, followed by the claim as a larger statement.

### 2.5 Two alternating layouts [Observed]
1. **Reading column.** Narrow serif prose, centered or offset, generous margin.
2. **Visual stage.** Wide canvas that stays on screen while text moves over it.

Floating **annotation cards** sit on the stage:
- Cream fill, thin border, small corner radius, light shadow.
- Bold sans title, then 2 to 4 lines of serif body.
- One idea per card.
- Placed at left or bottom-left so the visual keeps the centre.

### 2.5.1 Hero [Observed]
- Full-bleed ensemble of curved lines fanning from left to right in three colours.
- Short intro paragraph on the right.
- Two buttons: "Read technical report" and "Jump to explorer".
- A small "Read blog" pill at the bottom centre acts as the scroll cue.

### 2.6 Narrative order [Observed]
1. Open with the question. ("What will our economic future look like?")
2. Say what is unknown, and say what the page will let the reader do.
3. One concrete human example before any abstraction (the nurse's tasks).
4. Zoom out: tasks to whole economy (the dollar sign made of tiles).
5. Three scenarios (modest, substantial, extreme), each with a one-line name.
6. Reader controls: "Make your predictions" or "Skip to the scenarios".
7. Compare with what other people predicted (survey, n = 10,980 plus visitor data).
8. Four findings. Each finding follows: **claim, chart, reading of chart, caveat.**
9. Closing line: "The future is not predetermined."
10. Limits, reviewers, credits, version number.

### 2.7 Direct labelling over legends [Observed]
- End-of-line labels: "Modest ($34.1T)", "Without AI ($33.5T)".
- Big bold deltas beside bars: "+1.6%", "+8.3%", "+32.4%".
- Units go in the chart title: "US GDP (trillions of dollars a year, in 2025 prices)".
- Axes are light. Gridlines are thin. The data is the loudest thing.

### 2.8 Uncertainty drawn as an ensemble [Observed]
- Dozens of jittered lines per scenario, not a single line.
- Lines fade into dashes toward the right edge (the further future).
- Reader sees a band of outcomes, not a false point estimate.

### 2.9 Credibility signals [Observed]
- Version tag: "v1.0 of the Econ Scenario Explorer, September 2026".
- Survey sample sizes printed on charts (n = 10,980; n = 30,121).
- A named disclaimer explaining what the model leaves out.
- Open criticisms listed plainly, not hidden.
- Credits split by role (model, writing, design, engineering).
- Footnote under charts explaining assumptions (for example, GDP at 2025 prices).

### 2.10 Quiet interface chrome [Observed]
- Ghost pill buttons with small arrows (↗ ↓).
- One dark filled primary button ("Make your predictions").
- Thin reading-progress bar pinned at the top of the viewport.
- Scenario tabs are small pills (Modest / Substantial / Extreme) above the chart.

### 2.11 Tone of voice [Observed]
- Plain verbs, short claims, concrete examples.
- States uncertainty without hedging every line.
- Uses "might" and "could" for outcomes, "is" for definitions.
- Says what the model is not ("not a prediction, no probabilities attached").

---

## Part 3. Animation principles

### 3.1 Scroll-scrubbed, not time-triggered [Observed]
- Scroll position drives state. Scroll back and the animation reverses.
- Nothing plays on its own after the hero.
- **[Suggested]** GSAP ScrollTrigger with `scrub: true` (or `scrub: 0.5` for slight lag). Alternative: Framer Motion `useScroll` + `useTransform`.

### 3.2 Sticky stage, scrolling cards [Observed]
- The visual is pinned to the viewport.
- Text cards scroll past it.
- Each card entering the viewport advances the visual to its next state.
- **[Suggested]** One tall section per scene (for example `height: 400vh`). Inside, a `position: sticky; top: 0; height: 100vh` stage. Map scroll progress 0 to 1 onto named steps.

### 3.3 Object constancy [Observed]
The same marks keep existing and morph. They do not cut to new shapes.
- Random mosaic of tiles becomes the 16 nurse-task tiles.
- Those tiles recolour, grow, then become a dollar sign.
- The tile language returns as small icons beside the GDP and labor-share bars.
- Effect: reader never loses track of "what is the thing."

### 3.4 One variable changes per step [Observed]
Nurse sequence:
1. All tiles beige (unchanged).
2. Some tiles turn purple (augmented).
3. Some turn blue (automated).
4. New yellow tiles appear (new tasks).
5. Tiles scale up to show productivity.

Each card names exactly one change. Never two at once.

### 3.5 Build charts in reading order [Observed]
For the GDP line chart:
1. Axes and grid appear.
2. A vertical "Today" marker appears.
3. Faint lines draw in from the left.
4. Active scenario strengthens. End label fades in.
5. Next card dims the old scenario and promotes the next.

Legends appear only when their colours first appear.

### 3.5.1 Focus by dimming, not removing [Observed]
- Inactive scenarios drop to low opacity but stay visible.
- Active scenario goes full strength.
- Keeps the comparison in view while directing attention.

### 3.6 Staggered, scattered timing [Observed]
- Tiles change colour in a random order, not a left-to-right wave.
- Feels like paint drying, not a loading bar.
- **[Suggested]** Assign each tile a random delay in `[0, 0.6s]` seeded once so reverse scroll is consistent.

### 3.7 Size carries meaning [Observed]
- Tile size grows as "productivity" rises in the nurse example.
- Growth is visible and proportional. It is not decoration.

### 3.8 Soft motion vocabulary only [Observed]
Allowed: opacity, small translate, scale, colour interpolation, path draw.
Avoided: bounce, spring overshoot, spin, parallax on text, flashing.
- Text never moves independently of the scroll. It is a calm layer.
- **[Suggested]** easing `power2.out` or `cubic-bezier(0.22, 1, 0.36, 1)`. Duration 0.4 to 0.8s for state changes tied to scroll steps.

### 3.9 Tween between data states, keep layout fixed [Observed]
- Sankey of worker flows: switching tabs (Modest → Substantial → Extreme) morphs the ribbon widths and labels.
- Axes, positions, and labels stay put. Only values change.
- Number labels count to new values.

### 3.10 Mosaic as divider and frame [Observed]
- A pixel mosaic surrounds the heading "How might powerful AI change the economy?"
- Acts as a chapter break between explanation and interactive explorer.
- Reuses the opening visual language, so it feels designed, not decorated.

### 3.11 Bookend [Observed]
- The hero line fan appears again at the footer, rising upward.
- Gives the page a closed loop.

### 3.12 Progress indicator [Observed]
- A thin bar at the top fills as the reader scrolls.
- Helps in a long scrollytelling page.

### 3.13 Accessibility and fallback [Suggested]
- Respect `prefers-reduced-motion`: show the final state of each scene as a static figure with caption.
- Cards must be real HTML text, not canvas text.
- Provide a data table or alt-text summary for each chart.
- Keyboard-reachable tabs and sliders.
- Ensure the page still reads top to bottom with JS off.

---

## Part 4. Scroll timeline from the recording

| Time | Scene | What happens |
|---|---|---|
| 0–2s | Hero | Scenario fan, dashed tails, intro text at right |
| 2–5s | Transition | Body text with drop cap, then mosaic fills the screen |
| 5–7s | Tasks | Mosaic resolves into a nurse's task grid |
| 7–13s | Task states | Cards: jobs change, only humans, augmented, automated, new tasks. Tiles recolour step by step |
| 13–15s | Result | Tiles enlarge to show productivity, card "the nurse's job changes" |
| 15–17s | Scale-up | "Every task happens millions of times" then green tiles form a dollar sign |
| 17–24s | GDP chart | Axes, Today marker, scenario lines, three cards (modest, substantial, extreme) |
| 25–29s | Explorer gate | Mosaic frame around the "How might powerful AI change the economy?" heading |
| 29–31s | Survey | Dot strips of how people answered five questions |
| 31–33s | Finding 1 | GDP bars with tile icons, +1.6 / +8.3 / +32.4 |
| 33–38s | Finding 2 | Sankey with tabs, worker reallocation |
| 38–40s | Findings 3 and 4 | Small-multiple wage charts, labor vs capital bars |
| 40–41s | Close | Footer with the hero fan again |

---

## Part 5. Design tokens (starter set) [Suggested]

```css
:root {
  /* surface */
  --paper: #f7f5f2;          /* [Sampled] */
  --ink: #141413;            /* theme colour from page meta */
  --card: #f1ede4;           /* cream, estimated */
  --card-border: #d9d3c7;    /* estimated */
  --grid: rgba(20,20,19,.07);

  /* scenarios */
  --modest: #8ab6e5;         /* [Sampled] */
  --substantial: #9bb36b;    /* estimated olive */
  --extreme: #f3abc4;        /* [Sampled] */

  /* task states */
  --unchanged: #d8d2c4;
  --augmented: #a99cf0;
  --automated: #7fb4ec;
  --new: #f5b84b;

  /* shares */
  --labor: #3f9a74;
  --capital: #a8a79f;

  /* type */
  --font-serif: "Tiempos Text", "Source Serif 4", Georgia, serif;
  --font-sans: "Styrene B", "Inter", system-ui, sans-serif;

  /* motion */
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-step: 600ms;
}

@media (prefers-color-scheme: dark) {
  :root {
    --paper: #141413;
    --ink: #f1ede4;
    --card: #1f1e1c;
    --grid: rgba(241,237,228,.08);
  }
}
```

Fonts above are placeholders. The exact fonts on the site were not confirmed.

---

## Part 6. Reusable scene components [Suggested]

| Component | Job | Inputs |
|---|---|---|
| `<ScrollStage>` | Sticky 100vh canvas and step list | steps[], onProgress |
| `<StepCard>` | Floating annotation card | title, body, anchor |
| `<EnsembleChart>` | Many jittered lines per scenario | series[], dashFade, highlight |
| `<TileField>` | Grid of tiles that can recolour, scale, regroup | tiles[], layout, state |
| `<Sankey>` | Flow ribbons with tab switching | nodes, links, scenario |
| `<ShareBar>` | Two-part bar with delta label | partA, partB, deltaLabel |
| `<ScenarioTabs>` | Pill tabs controlling a chart | scenarios[], active |
| `<DotStrip>` | Distribution of survey or residual values | values[], axisLabels |
| `<InputSlider>` | Reader sets an assumption | min, max, step, label |
| `<ProgressBar>` | Reading progress at top | none |
| `<LimitsPanel>` | Disclaimer, version, credits | text |

---

## Part 7. Research-communication principles (from the paper)

These are not visual rules. They explain why the page works as research, and they transfer to any project.

### 7.1 Scenarios are not predictions [Observed in paper]
- The authors say the scenarios carry no probabilities.
- Purpose: make the consequences of different assumptions comparable.
- **For my work:** label cases "conservative / base / aggressive" and say plainly they are conditional, not forecasts.

### 7.2 Few parameters, all measurable [Observed in paper]
- The whole model runs on five scenario objects:
  1. share of tasks AI can affect,
  2. diffusion (how much of that is actually used),
  3. productivity gain per task,
  4. share automated versus augmented,
  5. rate of new task creation.
- Two labor-market frictions are added: search discount and posting speed.
- Authors argue each parameter can be measured over time, so data will reveal which scenario we are in.
- **For my work:** reduce the model to a handful of named levers. Put them in a table. Make each lever something observable.

### 7.3 Comparison to a counterfactual [Observed in paper]
- All results are shown as gaps versus an economy without AI.
- **For my work:** always plot "with strategy / model" against a plain baseline (buy-and-hold, null model, naive forecast).

### 7.4 Calibration table with a source per row [Observed in paper]
- Table 1 lists every parameter, its value in each scenario, and its source or basis.
- Anchors come from public data (labor survey, firm-adoption survey, usage index).
- Scenario values are marked as assumptions.
- **For my work:** include a full assumptions table. Mark each row "data" or "assumption."

### 7.5 Same mechanics, different size [Observed in paper]
- Authors state the mechanics are the same in all three scenarios. Only size and speed differ.
- **For my work:** show one engine with different inputs, not three separate models.

### 7.6 Sensitivity and robustness sections [Observed in paper]
- Capital supply elasticity re-run at four values.
- Wage rigidity re-run at four values.
- Shows the result flips sign in some settings (average wage can fall).
- **For my work:** add a robustness block for the one or two parameters you trust least.

### 7.7 Reader input compared with experts and the public [Observed on page]
- Visitors set their own predictions and see where they fall against survey respondents.
- **For my work:** let visitors set assumptions (return, volatility, horizon, prior) and see the implied result against your baseline cases.

### 7.8 Caveats as a first-class section [Observed in both]
- What the model leaves out is listed: policy responses, business cycles, demand effects, robotics, worker heterogeneity.
- Open reviewer criticisms are named.
- **For my work:** end each project with "What this does not capture."

### 7.9 Reproducibility [Observed outside the page]
- An independent reproduction exists (Zenodo record, Sept 2026) that reimplements the model from the appendix.
- **For my work:** publish code, a parameters file, and a README so anyone can rerun the numbers.

---

## Part 8. The paper in brief (worked example of a research section)

Use this as the model for how to write a short research summary block.

**Question.** How could AI change US jobs, growth, wages, and unemployment by 2030?

**Model.** Task-based economy. Workers split into cognitive occupations (affected by AI) and all other occupations (not directly affected). AI can automate tasks (capital does them) or augment tasks (workers do them faster). New tasks can be created. Displaced workers must search for jobs elsewhere, which takes time.

**Three scenarios (2030, versus no AI).**

| | Modest | Substantial | Extreme |
|---|---|---|---|
| GDP above no-AI path | +1.6% | +8.3% | +32.4% |
| GDP growth per year | 2.4% | 5.4% | 15.4% |
| Average wage vs no AI | +0.7% | +2.1% | +9.7% |
| Cognitive wage vs no AI | +0.4% | −0.3% | −11.5% |
| All-other wage vs no AI | +1.1% | +5.9% | +33.6% |
| Labor share of income | 59.4% | 56.1% | 45.2% |
| Capital share of income | 40.6% | 43.9% | 54.8% |
| Unemployment, cognitive workers | 2.9% | 4.5% | 17.9% |
| Unemployment, all workers | 3.9% | 4.6% | 11.9% |

**Key scenario inputs (2030).**

| | Modest | Substantial | Extreme |
|---|---|---|---|
| Affected task share | 0.20 | 0.30 | 0.50 |
| Diffusion | 0.20 | 0.40 | 0.60 |
| Log gain per task | 0.30 | 0.45 | 0.80 |
| Automation share | 0.50 | 0.75 | 0.90 |
| New-task ratio | 0.50 | 0.25 | 0 |
| Search discount | 0.17 | 0.08 | 0.04 |

**Four findings.**
1. AI raises GDP in every scenario, by very different amounts.
2. More transformative scenarios force more workers to change occupations, which raises unemployment.
3. Average wages rise, but gains concentrate outside knowledge work.
4. Capital's share of income rises. In the extreme case, about 15 points of GDP shift from labor to capital.

**Robustness.** Result depends on how easily capital can be added (if scarce, average wage can fall) and on how fast cognitive wages adjust (sticky wages mean more unemployment, flexible wages mean bigger pay cuts).

**Survey.** 10,980 US adults, August 2026. Median answers imply an outcome near the substantial scenario (GDP about 8.6% higher, unemployment about 4.6%).

**Stated limits.** No policy response, no business cycle or demand feedback, coarse worker groups, no robotics, single capital good.

---

## Part 9. Mapping to my own project types [Suggested]

### 9.1 Investment strategy research
| Page element | My version |
|---|---|
| Hero ensemble fan | Monte Carlo portfolio paths, fading dashes toward horizon |
| Nurse tiles (concrete example) | One trade or one holding followed from signal to P&L |
| Three scenarios | Conservative, base, aggressive regime assumptions |
| Parameter levers | Expected return, volatility, correlation, fees, rebalance rule |
| Sankey | Capital allocation across assets or return attribution |
| Share bar | Return from market vs strategy vs costs |
| Counterfactual | Buy-and-hold or equal-weight benchmark |
| Robustness | Vary transaction cost and regime length |
| Limits | Look-ahead bias, survivorship, liquidity, taxes |

### 9.2 Statistical modelling research
| Page element | My version |
|---|---|
| Hero ensemble fan | Posterior draws or bootstrap fits around the data |
| Tile field | Individual observations that morph into a distribution |
| Three scenarios | Three model specs (simple, mid, flexible) |
| Parameter levers | Priors, regularisation, feature set, window |
| Small multiples | One panel per model or per subgroup |
| Dot strip | Residuals or per-fold error |
| Share bar | Variance explained vs unexplained |
| Counterfactual | Naive baseline model |
| Robustness | Different splits, seeds, outlier handling |
| Limits | Data coverage, leakage risk, distribution shift |

### 9.3 Page skeleton for any project
1. Hero with ensemble visual and a one-line question.
2. Three-sentence "what this is and what it is not."
3. One concrete example (the nurse).
4. Zoom out to the whole system.
5. Three scenarios, each named in a short phrase.
6. Reader controls.
7. Findings 1 to N, each: claim, chart, reading, caveat.
8. Robustness.
9. Limits and what comes next.
10. Version, date, code link, credits.

---

## Part 10. Build checklist [Suggested]

**Design**
- [ ] Paper background and faint grid
- [ ] Hand-made texture on marks
- [ ] Max 4 semantic colours per chart, with legend
- [ ] Serif body, sans labels, bold chart titles
- [ ] Direct labels at line ends and big delta numbers
- [ ] Ensemble lines for uncertainty
- [ ] Cream annotation cards, one idea each
- [ ] Version tag, sample sizes, limits section

**Motion**
- [ ] Sticky stage with scroll-scrubbed steps
- [ ] One variable changes per step
- [ ] Same objects morph across scenes
- [ ] Axes first, then data, then labels
- [ ] Dim inactive series, do not remove
- [ ] Randomised, seeded stagger on tile changes
- [ ] Tween values between tabs, keep layout fixed
- [ ] Progress bar at top
- [ ] Hero visual returns in the footer

**Research**
- [ ] Question stated up front
- [ ] "Not a prediction" statement
- [ ] 5 to 7 measurable levers
- [ ] Baseline counterfactual in every chart
- [ ] Assumptions table with source or "assumption" per row
- [ ] Robustness block
- [ ] Limits section
- [ ] Code and parameters published

**Accessibility and performance**
- [ ] `prefers-reduced-motion` fallback
- [ ] Real HTML text in cards
- [ ] Alt text or data table per chart
- [ ] Canvas or SVG filters tested on mobile
- [ ] Lazy-load heavy scenes

---

## Part 11. My research (fill in)

> I have not supplied my own research paper or PDF yet. Paste or upload it, and this section will be filled from it.

**Title:**
**One-line question:**
**Domain:** (investment strategy / statistical modelling / other)
**Data used:**
**Method:**
**Baseline / counterfactual:**
**Scenarios or model variants (name each in one phrase):**
1.
2.
3.

**Levers the reader can change (5 to 7, measurable):**
| Lever | Range | Source or basis |
|---|---|---|
| | | |

**Key results (3 to 4 findings, each one sentence):**
1.
2.
3.

**Robustness checks:**
**What this does not capture:**
**Code / data link:**
**Version and date:**

**Mapping to page sections**
| Section | Visual | Animation step |
|---|---|---|
| Hero | | |
| Concrete example | | |
| Scenarios | | |
| Finding 1 | | |
| Finding 2 | | |
| Finding 3 | | |
| Robustness | | |
| Limits | | |

---

## Part 12. Honest limits of this analysis
- The recording was sampled at 1 frame per second. Exact durations, easing curves, and stagger values are not measured.
- Colours marked [Sampled] are single-pixel reads from compressed video. Treat as approximate.
- Fonts were not identified.
- Library choice (GSAP, Framer Motion, d3, canvas) is my guess, not confirmed.
- Slider and input interactions below the findings were only partly visible in the recording.
- The page and paper are dated September 2026 and may be updated.
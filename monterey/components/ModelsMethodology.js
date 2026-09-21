import Reveal from "@/components/Reveal";
import { modelsMethodology } from "@/lib/site";

export default function ModelsMethodology() {
  return (
    <section id="strategies" className="relative bg-black px-5 pb-0 pt-16 sm:px-8 md:px-[167px] md:pt-[180px]">
      <div className="mx-auto max-w-[1297px] md:mx-0">
        <h2 className="font-display text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[65px] md:leading-normal">
          {modelsMethodology.title}
        </h2>
        <p className="mt-4 max-w-[1297px] text-[14px] leading-[1.4] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px] md:leading-[1.32]">
          {modelsMethodology.intro}
        </p>
      </div>

      <Reveal className="mx-auto mt-8 grid max-w-[1590px] grid-cols-1 gap-4 sm:grid-cols-2 md:mx-0 md:mt-[62px] md:grid-cols-4 md:gap-[42px]">
        {modelsMethodology.cards.map((card) => (
          <article
            key={card.title}
            className="flex min-h-[240px] w-full flex-col rounded-[11px] bg-card px-4 pb-6 md:h-[593px] md:min-h-0 md:w-[366px] md:px-[19px] md:pb-[106px]"
          >
            <div className="mt-auto w-full max-w-[329px]">
              <h3 className="font-display text-[16px] leading-snug tracking-[-0.01em] text-white md:text-[20px] md:leading-normal md:whitespace-nowrap">
                {card.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.4] tracking-[-0.05em] text-white md:mt-[7px] md:text-[16px] md:leading-[1.32]">
                {card.body}
              </p>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { fcfPaper, RESEARCH_REPO } from "@/lib/research";

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
      <path
        d="M2 9L9 2M9 2H3.5M9 2V7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const researchNav = [
  { label: "Research", href: "/research" },
  { label: "Cash Generation", href: fcfPaper.href },
];

export default function ResearchNav({ current = "/research" }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[color:var(--paper)]/86 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="shrink-0" aria-label={site.name}>
          <Image
            src={site.logo.src}
            alt=""
            width={107}
            height={53}
            className="h-7 w-auto invert"
            priority
          />
        </Link>

        <nav
          aria-label="Research"
          className="research-ui flex items-center gap-4 text-[13px] font-medium text-[color:var(--ink)] md:gap-8 md:text-[15px]"
        >
          {researchNav.map((item) => {
            const active = current === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-opacity ${active ? "opacity-100" : "opacity-55 hover:opacity-100"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label === "Cash Generation" ? (
                  <>
                    <span className="md:hidden">Paper 01</span>
                    <span className="hidden md:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            );
          })}
        </nav>

        <div className="research-ui flex items-center gap-2 text-[13px]">
          <a
            href={`${RESEARCH_REPO}/tree/main/Research`}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-pill"
          >
            Github
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </header>
  );
}

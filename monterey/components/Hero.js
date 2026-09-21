import Image from "next/image";
import { site } from "@/lib/site";

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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate h-[100svh] w-full overflow-hidden md:h-[1081px] md:w-[1920px]"
    >
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="1920px"
        className="object-cover object-bottom"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.3)] to-[86.124%]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[72px] bg-gradient-to-b from-transparent to-black md:h-[96px]"
      />

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="flex w-full items-center justify-between gap-3 px-4 pt-4 md:grid md:grid-cols-[auto_1fr_auto] md:px-[68px] md:pt-[51px]">
          <a href="#top" className="relative z-10 shrink-0" aria-label={site.name}>
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={107}
              height={53}
              className="h-7 w-auto md:h-[53px]"
              priority
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center justify-center gap-[72px] text-[24px] font-medium leading-[22px] tracking-[-0.05em] text-white md:flex"
          >
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-opacity hover:opacity-80">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-[19px]">
            {site.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`nav-pill inline-flex h-8 items-center justify-center gap-1.5 rounded-[14px] px-2.5 text-[11px] tracking-[-0.05em] text-white md:h-[60px] md:rounded-[17px] md:px-3 md:text-[24px] ${
                  action.live ? "md:w-[167px]" : "md:w-[139px]"
                }`}
              >
                {action.label}
                {action.live ? (
                  <span className="size-1.5 rounded-full bg-live md:size-3" aria-hidden />
                ) : null}
                {action.arrow ? <ArrowUpRight /> : null}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="absolute inset-x-0 top-[16%] z-10 flex flex-col items-center px-5 text-center md:top-[225px]">
        <h1 className="font-display text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[48px] md:leading-normal">
          {site.hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-4 max-w-[340px] text-[13px] leading-[1.32] tracking-[-0.05em] text-white md:mt-[28px] md:max-w-[758px] md:text-[23px] md:leading-[1.24]">
          {site.hero.lede}
        </p>
        <div className="mt-6 flex w-full max-w-[240px] flex-col items-center gap-3 md:mt-[32px] md:max-w-none md:flex-row md:flex-wrap md:justify-center md:gap-[21px]">
          {site.hero.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`btn-glass inline-flex h-10 w-full items-center justify-center px-4 text-[13px] tracking-[-0.05em] text-white md:h-[48px] md:w-auto md:px-5 md:text-[21px] ${
                button.width === 262 ? "md:min-w-[262px]" : "md:min-w-[228px]"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

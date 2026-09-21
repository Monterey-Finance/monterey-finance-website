import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative bg-black px-5 sm:px-8 md:px-[108px]">
      <div className="relative mx-auto min-h-[280px] overflow-hidden rounded-[24px] border border-white md:mx-0 md:h-[622px] md:min-h-0 md:w-[1704px] md:rounded-[38px]">
        <Image
          src="/cta-banner.jpg"
          alt=""
          fill
          sizes="1704px"
          className="object-cover object-bottom"
        />

        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:px-0 md:pt-[146px] md:pb-0">
          <h2 className="font-display max-w-[1081px] text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[83px] md:leading-normal">
            {site.cta.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <Reveal className="mt-6 md:mt-[35px]">
            <a
              href={site.cta.button.href}
              className="btn-glass inline-flex h-10 w-full max-w-[260px] items-center justify-center px-4 text-[13px] tracking-[-0.05em] text-white md:h-[65px] md:w-[390px] md:max-w-none md:px-5 md:text-[27px]"
            >
              {site.cta.button.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

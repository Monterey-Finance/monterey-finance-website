import Image from "next/image";
import { researchLab } from "@/lib/site";

export default function ResearchLab() {
  return (
    <section id="research" className="relative bg-black px-5 pb-20 pt-16 sm:px-8 md:px-[167px] md:pb-[120px] md:pt-[180px]">
      <div className="mx-auto max-w-[1297px] md:mx-0">
        <h2 className="font-display text-[32px] leading-normal tracking-[-0.01em] text-white md:text-[65px]">
          {researchLab.title}
        </h2>
        <p className="mt-5 max-w-[1297px] text-[17px] leading-[1.32] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px]">
          {researchLab.intro}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1616px] grid-cols-1 gap-y-16 md:mx-0 md:mt-[149px] md:grid-cols-3 md:gap-x-[80px]">
        {researchLab.papers.map((paper) => (
          <article key={paper.title} className="flex flex-col items-center text-center">
            <div
              className="relative h-[400px] w-[310px] md:h-[434px] md:w-[335px]"
              style={{ transform: `rotate(${paper.rotate})` }}
            >
              <Image
                src="/paper.png"
                alt={paper.title}
                width={362}
                height={460}
                className="h-full w-full object-cover object-top drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]"
              />
            </div>
            <h3 className="font-display mt-8 max-w-[378px] text-[22px] leading-normal tracking-[-0.01em] text-white md:mt-[68px] md:text-[27px]">
              {paper.title}
            </h3>
            <p className="mt-3 max-w-[389px] text-[16px] leading-[1.32] tracking-[-0.05em] text-white md:text-[20px]">
              {paper.subtitle}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

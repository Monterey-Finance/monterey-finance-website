import Image from "next/image";
import Reveal from "@/components/Reveal";
import { firstPrinciples } from "@/lib/site";

export default function FirstPrinciples() {
  return (
    <section
      id="about"
      className="relative bg-black px-5 pb-12 pt-14 sm:px-8 md:px-[167px] md:pb-[80px] md:pt-[274px]"
    >
      <div className="mx-auto max-w-[1616px] md:mx-0">
        <h2 className="font-display text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[65px] md:leading-normal">
          {firstPrinciples.title}
        </h2>
        <p className="mt-4 max-w-[1297px] text-[14px] leading-[1.4] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px] md:leading-[1.32]">
          {firstPrinciples.intro}
        </p>

        <Reveal className="mt-10 grid grid-cols-1 gap-y-10 md:mt-[146px] md:grid-cols-3 md:gap-x-[151px] md:gap-y-16">
          {firstPrinciples.columns.map((column) => (
            <div key={column.title} className="flex flex-col items-center text-center">
              <p
                className={`max-w-[320px] text-[14px] font-normal leading-[1.4] tracking-[-0.05em] text-white md:max-w-[438px] md:leading-[1.32] ${
                  column.size === "30px" ? "md:text-[30px]" : "md:text-[32px]"
                }`}
              >
                <span className="font-bold">{column.title}</span> {column.body}
              </p>
              <div
                className="mt-4 h-[140px] w-[136px] overflow-hidden md:mt-[52px] md:h-[308px] md:w-[302px]"
                style={{ transform: `rotate(${column.rotate})` }}
              >
                <Image
                  src="/pillar.png"
                  alt=""
                  width={302}
                  height={308}
                  className="h-full w-full object-cover object-top mix-blend-hard-light"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

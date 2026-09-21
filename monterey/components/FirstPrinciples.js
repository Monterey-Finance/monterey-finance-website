import Image from "next/image";
import Reveal from "@/components/Reveal";
import { firstPrinciples } from "@/lib/site";

export default function FirstPrinciples() {
  return (
    <section
      id="about"
      className="relative bg-black px-5 pb-16 pt-20 sm:px-8 md:px-[167px] md:pb-[80px] md:pt-[274px]"
    >
      <div className="mx-auto max-w-[1616px] md:mx-0">
        <h2 className="font-display text-[32px] leading-normal tracking-[-0.01em] text-white md:text-[65px]">
          {firstPrinciples.title}
        </h2>
        <p className="mt-5 max-w-[1297px] text-[17px] leading-[1.32] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px]">
          {firstPrinciples.intro}
        </p>

        <Reveal className="mt-14 grid grid-cols-1 gap-y-16 md:mt-[146px] md:grid-cols-3 md:gap-x-[151px]">
          {firstPrinciples.columns.map((column) => (
            <div key={column.title} className="flex flex-col items-center text-center">
              <p
                className={`max-w-[438px] text-[18px] font-normal leading-[1.32] tracking-[-0.05em] text-white ${
                  column.size === "30px" ? "md:text-[30px]" : "md:text-[32px]"
                }`}
              >
                <span className="font-bold">{column.title}</span> {column.body}
              </p>
              <div
                className="mt-6 h-[220px] w-[216px] overflow-hidden md:mt-[52px] md:h-[308px] md:w-[302px]"
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

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { liveFund } from "@/lib/site";

export default function LiveFundPerformance() {
  return (
    <section id="performance" className="relative bg-black px-5 pb-16 pt-20 sm:px-8 md:px-[167px] md:pb-[100px] md:pt-[180px]">
      <div className="mx-auto max-w-[1297px] md:mx-0">
        <h2 className="font-display text-[32px] leading-normal tracking-[-0.01em] text-white md:text-[65px]">
          {liveFund.title}
        </h2>
        <p className="mt-5 max-w-[1297px] text-[17px] leading-[1.32] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px]">
          {liveFund.intro}
        </p>
      </div>

      <Reveal className="relative mx-auto mt-12 h-[240px] w-full max-w-[1656px] overflow-hidden rounded-[16px] sm:h-[420px] md:mt-[76px] md:h-[932px] md:rounded-[24px] md:-ml-[35px] md:w-[1656px] md:max-w-none">
        <Image
          src="/fund-performance.png"
          alt="Live Monterey Finance fund performance in a browser window"
          fill
          sizes="1656px"
          className="object-cover object-top"
        />
      </Reveal>
    </section>
  );
}

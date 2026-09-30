import Image from "next/image";
import Reveal from "@/components/Reveal";
import { liveFund } from "@/lib/site";

export default function LiveFundPerformance() {
  return (
    <section id="performance" className="relative bg-black px-5 pb-16 pt-20 sm:px-8 md:px-[167px] md:pb-[100px] md:pt-[180px]">
      <div className="mx-auto max-w-[1297px] md:mx-0">
        <h2 className="font-display text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[65px] md:leading-normal">
          {liveFund.title}
        </h2>
        <p className="mt-4 max-w-[1297px] text-[14px] leading-[1.4] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px] md:leading-[1.32]">
          {liveFund.intro}
        </p>
      </div>

      <Reveal className="relative mx-auto mt-8 h-[180px] w-full max-w-[1656px] overflow-hidden rounded-[14px] sm:h-[320px] md:mt-[76px] md:h-[932px] md:rounded-[24px] md:-ml-[35px] md:w-[1656px] md:max-w-none">
        <Image
          src="/fund performance.jpg"
          alt="Live Monterey Finance fund performance in a browser window"
          fill
          sizes="1656px"
          className="object-cover object-top"
        />
      </Reveal>
    </section>
  );
}

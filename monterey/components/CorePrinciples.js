import { corePrinciples } from "@/lib/site";

export default function CorePrinciples() {
  return (
    <section id="principles" className="relative bg-black px-5 pb-16 pt-12 sm:px-8 md:px-[167px] md:pb-[150px] md:pt-[105px]">
      <div className="mx-auto max-w-[1297px] md:mx-0">
        <h2 className="font-display text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[65px] md:leading-normal">
          {corePrinciples.title}
        </h2>
        <ul className="mt-4 max-w-[1297px] list-disc pl-5 text-[14px] leading-[1.4] tracking-[-0.05em] text-white md:mt-[23px] md:pl-[48px] md:text-[32px] md:leading-[1.32]">
          {corePrinciples.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

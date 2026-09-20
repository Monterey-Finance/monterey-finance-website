import { modelsMethodology } from "@/lib/site";

export default function ModelsMethodology() {
  return (
    <section id="strategies" className="relative bg-black px-5 pb-0 pt-16 sm:px-8 md:px-[167px] md:pt-[180px]">
      <div className="mx-auto max-w-[1297px] md:mx-0">
        <h2 className="font-display text-[32px] leading-normal tracking-[-0.01em] text-white md:text-[65px]">
          {modelsMethodology.title}
        </h2>
        <p className="mt-5 max-w-[1297px] text-[17px] leading-[1.32] tracking-[-0.05em] text-white md:mt-[23px] md:text-[32px]">
          {modelsMethodology.intro}
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1590px] grid-cols-1 gap-6 sm:grid-cols-2 md:mx-0 md:mt-[62px] md:grid-cols-4 md:gap-[42px]">
        {modelsMethodology.cards.map((card) => (
          <article
            key={card.title}
            className="flex min-h-[420px] w-full flex-col rounded-[11px] bg-card px-5 pb-8 md:h-[593px] md:w-[366px] md:px-[19px] md:pb-[106px]"
          >
            <div className="mt-auto w-full max-w-[329px]">
              <h3 className="font-display text-[18px] leading-normal tracking-[-0.01em] text-white md:text-[20px] md:whitespace-nowrap">
                {card.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.32] tracking-[-0.05em] text-white md:mt-[7px] md:text-[16px]">
                {card.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

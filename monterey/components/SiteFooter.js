import Image from "next/image";
import { site } from "@/lib/site";

function FooterColumn({ label, links }) {
  return (
    <div className="flex min-w-[129px] flex-col items-center text-center">
      <p className="text-[18px] font-medium leading-[22px] tracking-[-0.05em] text-muted md:text-[28px]">
        {label}
      </p>
      <ul className="mt-6 flex flex-col items-center gap-5 md:mt-[28px] md:gap-[20px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[16px] font-medium leading-[22px] tracking-[-0.05em] text-white transition-opacity hover:opacity-80 md:text-[24px]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const { footer } = site;

  return (
    <footer className="relative mt-16 overflow-hidden bg-black md:mt-[117px] md:h-[636px]">
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="logo-knockout-white" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 1"
          />
        </filter>
      </svg>

      <div className="relative z-10 flex flex-col gap-12 px-5 pt-10 sm:px-8 md:flex-row md:items-start md:px-[108px] md:pt-[87px]">
        <div className="max-w-[858px]">
          <Image
            src={footer.wordmark.src}
            alt={footer.wordmark.alt}
            width={footer.wordmark.width}
            height={footer.wordmark.height}
            className="h-auto w-[280px] md:h-[63px] md:w-[530px]"
          />
          <p className="mt-5 text-[15px] font-medium leading-[1.48] tracking-[-0.05em] text-white md:mt-[22px] md:text-[23px]">
            {footer.description}
          </p>
        </div>

        <div className="flex gap-16 md:ml-[150px] md:gap-[107px]">
          <FooterColumn label={footer.navigation.label} links={footer.navigation.links} />
          <FooterColumn label={footer.contact.label} links={footer.contact.links} />
        </div>
      </div>

      <img
        src={footer.watermark.src}
        alt=""
        width={footer.watermark.width}
        height={footer.watermark.height}
        className="pointer-events-none absolute left-1/2 top-[160px] w-[min(90vw,753px)] max-w-none -translate-x-1/2 select-none md:top-[300px] md:h-[373px] md:w-[753px]"
        style={{ filter: "url(#logo-knockout-white) brightness(1.85)" }}
      />
    </footer>
  );
}

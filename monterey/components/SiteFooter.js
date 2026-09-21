import Image from "next/image";
import { site } from "@/lib/site";

function FooterColumn({ label, links }) {
  return (
    <div className="flex min-w-[96px] flex-col items-center text-center md:min-w-[129px]">
      <p className="text-[13px] font-medium leading-[22px] tracking-[-0.05em] text-muted md:text-[28px]">
        {label}
      </p>
      <ul className="mt-4 flex flex-col items-center gap-3 md:mt-[28px] md:gap-[20px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] font-medium leading-[22px] tracking-[-0.05em] text-white transition-opacity hover:opacity-80 md:text-[24px]"
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
    <footer className="relative mt-12 overflow-hidden bg-black pb-28 md:mt-[117px] md:h-[636px] md:pb-0">
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="logo-knockout-white" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 1"
          />
        </filter>
      </svg>

      <img
        src={footer.watermark.src}
        alt=""
        width={footer.watermark.width}
        height={footer.watermark.height}
        className="pointer-events-none absolute bottom-[-8px] left-1/2 z-0 h-[120px] w-[240px] max-w-[58vw] -translate-x-1/2 select-none object-contain object-bottom md:bottom-auto md:top-[370px] md:h-[373px] md:w-[753px] md:max-w-none"
        style={{ filter: "url(#logo-knockout-white) brightness(1.85)" }}
      />

      <div className="relative z-10 flex flex-col gap-10 px-5 pt-8 sm:px-8 md:flex-row md:items-start md:gap-12 md:px-[108px] md:pt-[87px]">
        <div className="max-w-[858px]">
          <Image
            src={footer.wordmark.src}
            alt={footer.wordmark.alt}
            width={footer.wordmark.width}
            height={footer.wordmark.height}
            className="h-auto w-[180px] md:h-[63px] md:w-[530px]"
          />
          <p className="mt-4 text-[13px] font-medium leading-[1.48] tracking-[-0.05em] text-white md:mt-[22px] md:text-[23px]">
            {footer.description}
          </p>
        </div>

        <div className="flex gap-10 md:ml-[150px] md:gap-[107px]">
          <FooterColumn label={footer.navigation.label} links={footer.navigation.links} />
          <FooterColumn label={footer.contact.label} links={footer.contact.links} />
        </div>
      </div>
    </footer>
  );
}

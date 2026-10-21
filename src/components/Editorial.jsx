import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import { SplitWords } from "./PageMotion";
import { CONTACT } from "@/lib/site";

// Shared pieces of the editorial design system used across every .tx page.

export function Arrow() {
  return (
    <svg className="ar" width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M.8 6h14m0 0L10.3 1.3M14.8 6l-4.5 4.7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function RowArrow() {
  return (
    <svg className="ar" width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden="true">
      <path d="M0 8h24m0 0-7-7m7 7-7 7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// An image chapter. Shows the "Image to supply" placeholder until `src` is set.
export function Shot({ fig, title, spec, src, alt, wide = false, sizes = "100vw", priority }) {
  return (
    <figure className={`shot ${wide ? "shot-xl" : "shot-sq"}`} data-shot>
      {src ? (
        <Image src={src} alt={alt ?? title} fill sizes={sizes} priority={priority} />
      ) : (
        <div className="await">
          <span>Image to supply</span>
        </div>
      )}
      <span className="tick" />
      {wide && <span className="tick r" />}
      <figcaption className="ph">
        <div className="cap">
          <span className="mono">{fig}</span>
          <span className="t">{title}</span>
          {spec && <span className="mono">{spec}</span>}
        </div>
      </figcaption>
    </figure>
  );
}

export function SectionLabel({ children, dark = false }) {
  return (
    <div className="ed-label">
      <span className="mono">{children}</span>
      <div className={`rule${dark ? " rule-dk" : ""}`} data-rule style={{ maxWidth: 90 }} />
    </div>
  );
}

// Label column on the left, heading (and optional body) on the right.
export function EdHead({ label, title, dark, children, style }) {
  return (
    <div className="ed" style={style}>
      <SectionLabel dark={dark}>{label}</SectionLabel>
      <div className="ed-body">
        <h2 data-split>
          <SplitWords text={title} />
        </h2>
        {children}
      </div>
    </div>
  );
}

// Inner-page masthead: breadcrumb, rule, split heading, lede and optional links.
export function PageHead({ crumbs, title, lede, compact = false, children }) {
  return (
    <section className={`mast mast-sub${compact ? " compact" : ""}`}>
      <div className="tx-wrap">
        <Breadcrumb items={crumbs} />
        <div className="rule" data-rule />
        <h1 data-split>
          <SplitWords text={title} />
        </h1>
        {(lede || children) && (
          <div className="mast-foot">
            {lede && <p className="lede">{lede}</p>}
            {children && <div className="mast-links">{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}

export function TextLink({ href, children, dark = false }) {
  return (
    <Link className={`lk${dark ? " on-dark" : ""}`} href={href}>
      {children} <Arrow />
    </Link>
  );
}

// Closing call to action shared by the inner pages.
export function CtaBand({
  title = "Send us the cloth.",
  lede = "We will tell you what is possible, what it costs and how fast we can supply it.",
  product,
  links,
}) {
  const suffix = product ? `&product=${encodeURIComponent(product)}` : "";
  const actions = links ?? [
    { href: `/contact/?reason=sample${suffix}`, label: "Request a sample" },
    { href: `/contact/?reason=general${suffix}`, label: "Talk to a technician" },
  ];
  return (
    <section className="band dark cta-band">
      <div className="tx-wrap">
        <span className="mono" data-fade>
          Next step
        </span>
        <h2 data-split style={{ marginTop: 22, maxWidth: "14ch" }}>
          <SplitWords text={title} />
        </h2>
        <div className="cta-foot">
          <p className="lede" data-fade>
            {lede}
          </p>
          <div className="mast-links" data-fade>
            {actions.map((a) => (
              <TextLink key={a.href} href={a.href} dark>
                {a.label}
              </TextLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Telephone, email and works address, as stacked rows.
export function ContactStack() {
  return (
    <div className="cstack">
      <div className="cblock" data-fade>
        <span className="mono">Telephone</span>
        <a className="v" href={`tel:${CONTACT.phoneHref}`}>
          {CONTACT.phone}
        </a>
      </div>
      <div className="cblock" data-fade>
        <span className="mono">Email</span>
        <a className="v" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
      </div>
      <div className="cblock" data-fade>
        <span className="mono">Works</span>
        <address>
          Unit 1, 45 Lambeth Road
          <br />
          Reddish, Stockport
          <br />
          SK5 6TW, United Kingdom
        </address>
      </div>
    </div>
  );
}

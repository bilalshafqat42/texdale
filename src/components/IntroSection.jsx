import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <section className="bg-paper relative">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
          <h1 className="text-ink text-5xl leading-[1.05] font-normal sm:text-6xl md:text-7xl">
            Creating cleaner textile chemistry
            <br />
            for{" "}
            <span className="bg-brand-blue inline-block px-3 py-1 text-white">the modern mill</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <a href="#hero" className="group text-ink inline-flex items-center gap-2 text-lg">
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
            what we can do for you?
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <section className="bg-paper relative">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-5 md:pt-[50px] md:pb-5">
        <div className="grid gap-6 md:grid-cols-[70%_30%] md:items-center">
          <Reveal onMount x={-60} y={0} delay={0.45}>
            <h1 className="text-ink text-5xl leading-[1.05] font-normal sm:text-6xl md:text-7xl">
              Textile chemicals for pretreatment, dyeing and finishing — UK manufactured, REACH
              compliant.
            </h1>
          </Reveal>
          <Reveal onMount x={60} y={0} delay={0.8} className="md:flex md:justify-end">
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
      </div>
    </section>
  );
}

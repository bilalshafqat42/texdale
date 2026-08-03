import HeroBackground from "./HeroBackground";
import BubbleAccent from "./BubbleAccent";
import HeroWordmark from "./HeroWordmark";

export default function HeroSection() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center justify-center overflow-hidden">
      <HeroBackground />
      <BubbleAccent className="absolute top-24 right-6 h-40 w-52 md:top-28 md:right-10" />
      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        <HeroWordmark />
      </div>
    </section>
  );
}

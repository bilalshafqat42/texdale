import Image from "next/image";

const ACCENT_BORDERS = {
  green: "hover:border-accent/30",
  blue: "hover:border-brand-blue/40",
};

export default function Card({ children, className = "", image, imageAlt = "", accent = "green" }) {
  return (
    <div
      className={`border-line bg-paper group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 ${ACCENT_BORDERS[accent]} hover:shadow-lg ${className}`}
    >
      {image && (
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}

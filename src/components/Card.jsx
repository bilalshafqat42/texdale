import Image from "next/image";

export default function Card({ children, className = "", image, imageAlt = "" }) {
  return (
    <div className={`border-line bg-paper group overflow-hidden rounded-lg border ${className}`}>
      {image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

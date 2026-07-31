import Image from "next/image";
import { CONTACT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-line border-t py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Image
          src="/texdale-dark.svg"
          alt="Texdale"
          width={91}
          height={32}
          className="h-7 w-auto"
        />
        <div className="text-ink/70 mt-4 text-sm">
          <p>{CONTACT.address}</p>
          <p className="mt-1">
            <a href={`tel:${CONTACT.phoneHref}`} className="hover:underline">
              {CONTACT.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${CONTACT.email}`} className="hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <p className="text-ink/70 mt-1 text-xs">Registered office: {CONTACT.registeredOffice}</p>
        </div>
      </div>
    </footer>
  );
}

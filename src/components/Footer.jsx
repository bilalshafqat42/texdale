import { CONTACT, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-line border-t py-10">
      <div className="text-ink/70 mx-auto max-w-6xl px-6 text-sm">
        <p>
          {SITE_NAME} · {CONTACT.address}
        </p>
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
    </footer>
  );
}

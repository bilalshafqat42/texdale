const ICONS = {
  source: (
    <path
      d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11Z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  ),
  formulate: (
    <path
      d="M9 3h6 M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9.5V3 M7.5 15h9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  labTest: (
    <path
      d="M9 3h6 M10 3v9.8a5 5 0 1 0 4 0V3 M9 16h6"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  produce: (
    <path
      d="M3 20V10l5 3.5V10l5 3.5V10l5 3.5V20H3Z M6 20v-3 M11 20v-3 M16 20v-3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  deliver: (
    <path
      d="M3 7h10v9H3V7Z M13 10h4l3 3v3h-7v-6Z M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M16.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function ProcessStep({ icon, number, label, description }) {
  return (
    <div className="border-line bg-paper flex flex-col gap-4 rounded-xl border p-6 transition-shadow duration-300 hover:shadow-md">
      <div className="bg-accent-light text-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          {ICONS[icon]}
        </svg>
      </div>
      <div>
        <p className="text-caption text-ink/60 tracking-wide uppercase">{number}</p>
        <p className="text-ink mt-1 text-base font-semibold">{label}</p>
        {description && <p className="text-ink/70 mt-1.5 text-sm">{description}</p>}
      </div>
    </div>
  );
}

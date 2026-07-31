export default function Chip({ children, active = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${
        active ? "border-accent bg-accent-light text-accent" : "border-line text-ink/70"
      }`}
    >
      {children}
    </span>
  );
}

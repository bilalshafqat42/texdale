export default function Badge({ children }) {
  return (
    <span className="bg-accent-light text-accent inline-flex items-center rounded px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

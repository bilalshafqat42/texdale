export default function Button({ variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm transition-colors";
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink/90",
    secondary: "border border-ink text-ink hover:bg-ink/5",
    ghost: "text-ink hover:bg-ink/5",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

import Link from "next/link";

const base =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm transition-colors";
const variants = {
  primary: "bg-ink text-paper hover:bg-ink/90",
  secondary: "border border-ink text-ink hover:bg-ink/5",
  ghost: "text-ink hover:bg-ink/5",
  // For use on dark or colourful backgrounds, where the ink-based variants
  // above would have insufficient (or inverted) contrast.
  light: "bg-paper text-ink hover:bg-paper/90",
  "light-outline": "border border-paper text-paper hover:bg-paper/10",
};

export default function Button({ variant = "primary", className = "", href, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes} {...props} />;
  }

  return <button className={classes} {...props} />;
}

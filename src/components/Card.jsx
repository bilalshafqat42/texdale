export default function Card({ children, className = "" }) {
  return (
    <div className={`border-line bg-paper rounded-lg border p-5 ${className}`}>{children}</div>
  );
}

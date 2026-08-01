export default function BubbleAccent({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 200"
      className={className}
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    >
      <circle cx="30" cy="40" r="14" />
      <circle cx="70" cy="20" r="6" />
      <circle cx="110" cy="55" r="20" />
      <circle cx="160" cy="30" r="9" />
      <circle cx="190" cy="70" r="16" />
      <circle cx="225" cy="45" r="5" />
      <circle cx="55" cy="90" r="8" />
      <circle cx="140" cy="100" r="11" />
      <circle cx="205" cy="115" r="7" />
    </svg>
  );
}

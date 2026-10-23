// One-off logo reveal shown over the page on a full page load. Pure CSS
// keyframes (see "logo intro" in texdale.css): no JavaScript, never blocks
// clicks, hidden from assistive tech, skipped for reduced-motion users.
// Client-side navigation keeps the layout mounted, so it never replays.

const WORDMARK =
  "M108.6 43.2H68.8V172H41.6V43.2H1.8V16H108.6V43.2ZM196.156 144.8V172H118.756V16H194.956V43.2H145.956V79.4H188.156V106.4H145.956V144.8H196.156ZM199.991 172L245.191 85.6L206.391 16H237.591L260.591 61.2L283.591 16H314.591L275.591 88.6L320.991 172H291.191L260.591 113.6L229.991 172H199.991ZM374.494 172H329.694V16H374.494C420.694 16 453.094 47.2 453.094 92.4C453.094 137.4 420.094 172 374.494 172ZM374.494 43.2H356.894V144.8H374.494C405.294 144.8 425.894 123.4 425.894 94.6C425.894 65 404.494 43.2 374.494 43.2ZM437.83 172L537.03 23C540.83 17.2 546.43 14.8 552.63 14.8C559.63 14.8 564.03 20.2 564.03 28.4V172H537.03V66.6L470.23 172H437.83ZM649.452 172H580.052V16H607.052V144.8H649.452V172ZM737.758 144.8V172H660.358V16H736.558V43.2H687.558V79.4H729.758V106.4H687.558V144.8H737.758Z";

// The four brand bars. `dx` is how far each one starts from its final place,
// so all four begin stacked on the centre of the stripe.
const BARS = [
  { x: 0, fill: "#0062C8", dx: 278.25 },
  { x: 185.5, fill: "#FFD800", dx: 92.75 },
  { x: 371, fill: "#00A450", dx: -92.75 },
  { x: 556.5, fill: "#D46060", dx: -278.25 },
];

export default function LogoIntro() {
  return (
    <div className="tx-intro" aria-hidden="true">
      <div className="tx-intro-logo">
        <div className="tx-intro-wm">
          <svg viewBox="0 14 742 159" focusable="false">
            <path d={WORDMARK} fill="#263760" />
          </svg>
        </div>
        <svg className="tx-intro-bars" viewBox="0 222 742 37.1" focusable="false">
          {BARS.map((b) => (
            <rect
              key={b.fill}
              x={b.x}
              y="222"
              width="185.5"
              height="37.1"
              fill={b.fill}
              style={{ "--dx": `${b.dx}px` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

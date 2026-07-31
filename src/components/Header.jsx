export default function Header() {
  return (
    <header className="border-line border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm">TEXDALE</span>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/sustainability">Sustainability</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
        </nav>
        <a href="/contact" className="border-ink rounded-md border px-4 py-2 text-sm">
          Request a quote
        </a>
      </div>
    </header>
  );
}

"use client";

import { useId, useState } from "react";
import Link from "next/link";

export default function ProductFinder({ products }) {
  const [search, setSearch] = useState("");
  const inputId = useId();

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        Search this category&rsquo;s products
      </label>
      <input
        id={inputId}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search this category's products…"
        className="border-line focus:border-accent w-full max-w-sm rounded-md border px-3 py-2 text-sm outline-none"
      />

      <div className="mt-6">
        {filtered.length === 0 ? (
          <p className="text-ink/70 text-sm">No products match your search.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-line border-b">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Product
                </th>
                <th scope="col" className="py-2 font-medium">
                  Function
                </th>
              </tr>
            </thead>
            <tbody className="divide-line divide-y">
              {filtered.map((p) => (
                <tr key={p.slug}>
                  <td className="py-3 pr-4 align-top whitespace-nowrap">
                    <Link
                      href={`/products/${p.category}/${p.slug}`}
                      className="text-accent font-medium"
                    >
                      {p.name}
                    </Link>
                  </td>
                  <td className="text-ink/70 py-3 align-top">{p.functionSummary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

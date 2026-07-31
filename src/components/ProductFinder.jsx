"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import Chip from "./Chip";

export default function ProductFinder({ products, groups = [] }) {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);
  const inputId = useId();

  useEffect(() => {
    // window.location is unavailable during static export prerendering, so the
    // query string can only be read client-side after mount.
    const params = new URLSearchParams(window.location.search);
    const groupParam = params.get("group");
    if (groupParam && groups.some((g) => g.slug === groupParam)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveGroup(groupParam);
    }
  }, [groups]);

  const filtered = products
    .filter((p) => !activeGroup || p.group === activeGroup)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {groups.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => setActiveGroup(null)}>
            <Chip active={activeGroup === null}>All</Chip>
          </button>
          {groups.map((g) => (
            <button key={g.slug} type="button" onClick={() => setActiveGroup(g.slug)}>
              <Chip active={activeGroup === g.slug}>{g.name}</Chip>
            </button>
          ))}
        </div>
      )}

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

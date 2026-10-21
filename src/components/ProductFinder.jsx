"use client";

import { Suspense, useId, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RowArrow } from "./Editorial";

// Filterable, searchable product list. The active group lives in the URL
// (?group=...) so mega-menu links, chips and the back button all agree.
// `groupKey` picks which product field the chips filter on: "group" within a
// range, or "category" on the all-products page.
export default function ProductFinder(props) {
  return (
    <Suspense fallback={<FinderView {...props} activeGroup={null} search="" />}>
      <Finder {...props} />
    </Suspense>
  );
}

function Finder(props) {
  const { groups = [] } = props;
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const param = params.get("group");
  const activeGroup = groups.some((g) => g.slug === param) ? param : null;

  function setGroup(slug) {
    const next = new URLSearchParams(params.toString());
    if (slug) next.set("group", slug);
    else next.delete("group");
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <FinderView
      {...props}
      activeGroup={activeGroup}
      search={search}
      onSearch={setSearch}
      onGroup={setGroup}
    />
  );
}

function FinderView({
  products,
  groups = [],
  groupKey = "group",
  activeGroup,
  search,
  onSearch,
  onGroup,
}) {
  const inputId = useId();
  const term = search.trim().toLowerCase();
  const groupName = Object.fromEntries(groups.map((g) => [g.slug, g.name]));

  const filtered = products
    .filter((p) => !activeGroup || p[groupKey] === activeGroup)
    .filter(
      (p) =>
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.functionSummary.toLowerCase().includes(term),
    );

  return (
    <div className="finder">
      <div className="finder-bar">
        {groups.length > 0 && (
          <div className="chips" role="group" aria-label="Filter products">
            <button type="button" aria-pressed={!activeGroup} onClick={() => onGroup?.(null)}>
              All
            </button>
            {groups.map((g) => (
              <button
                key={g.slug}
                type="button"
                aria-pressed={activeGroup === g.slug}
                onClick={() => onGroup?.(g.slug)}
              >
                {g.name}
              </button>
            ))}
          </div>
        )}
        <div className="finder-search">
          <label htmlFor={inputId} className="mono">
            Search
          </label>
          <input
            id={inputId}
            type="search"
            value={search}
            onChange={(e) => onSearch?.(e.target.value)}
            placeholder="Product name or function"
          />
        </div>
      </div>

      <p className="finder-count mono" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      {filtered.length === 0 ? (
        <p className="finder-empty">
          Nothing matches that search. Try a different term, or{" "}
          <Link href="/contact/?reason=general">ask a technician</Link>.
        </p>
      ) : (
        <ul className="prows">
          {filtered.map((p) => (
            <li key={`${p.category}-${p.slug}`}>
              <Link className="prow" href={`/products/${p.category}/${p.slug}`}>
                <span className="nm">{p.name}</span>
                <span className="fn">{p.functionSummary}</span>
                <span className="tag mono">{groupName[p[groupKey]] ?? ""}</span>
                <RowArrow />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

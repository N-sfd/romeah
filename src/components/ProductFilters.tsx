"use client";

import { useMemo, useState } from "react";

export type FilterSelection = Record<string, string[]>;

export function emptyFilters(): FilterSelection {
  return {};
}

const filterGroups = [
  {
    title: "Category",
    options: [
      "Shoulder Bags",
      "Crossbody",
      "Totes",
      "Top Handle",
      "Mini Bags",
      "Evening",
      "Travel Bags",
    ],
  },
  {
    title: "Color",
    options: ["Black", "Burgundy", "Ivory", "Brown", "Olive", "Gold"],
  },
  {
    title: "Material",
    options: ["Leather", "Suede", "Canvas", "Fabric", "Cashmere", "Polycarbonate"],
  },
  {
    title: "Price",
    options: ["Under $250", "$250–$350", "$350+"],
  },
  {
    title: "Size",
    options: ["Mini", "Medium", "Large", "Cabin"],
  },
  {
    title: "Collection",
    options: ["La Notte", "Verde", "Milano", "Dolce Vita", "Romeah Travel"],
  },
  {
    title: "Availability",
    options: ["In Stock", "Coming Soon"],
  },
];

type Props = {
  value: FilterSelection;
  onChange: (next: FilterSelection) => void;
};

export default function ProductFilters({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<FilterSelection>(value);

  const activeCount = useMemo(
    () => Object.values(value).reduce((n, list) => n + list.length, 0),
    [value],
  );

  function openDrawer() {
    setDraft(value);
    setOpen(true);
  }

  function toggleOption(group: string, option: string) {
    setDraft((current) => {
      const list = current[group] ?? [];
      const next = list.includes(option)
        ? list.filter((o) => o !== option)
        : [...list, option];
      return { ...current, [group]: next };
    });
  }

  function apply() {
    onChange(draft);
    setOpen(false);
  }

  function clear() {
    const empty = emptyFilters();
    setDraft(empty);
    onChange(empty);
    setOpen(false);
  }

  return (
    <>
      <button type="button" onClick={openDrawer} className="text-sm">
        FILTER +{activeCount > 0 ? ` (${activeCount})` : ""}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/30">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close filters"
            onClick={() => setOpen(false)}
          />

          <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto h-[85vh] md:h-full w-full max-w-md bg-white p-8 overflow-y-auto rounded-t-sm md:rounded-none">
            <div className="flex justify-between mb-10">
              <h2 className="font-serif text-3xl">Filters</h2>
              <button type="button" onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            {filterGroups.map((group) => (
              <FilterSection
                key={group.title}
                title={group.title}
                options={group.options}
                selected={draft[group.title] ?? []}
                onToggle={(option) => toggleOption(group.title, option)}
              />
            ))}

            <div className="sticky bottom-0 bg-white pt-6 pb-2 space-y-3">
              <button
                type="button"
                className="w-full bg-[#241F1C] text-white py-4 text-xs tracking-[0.15em]"
                onClick={apply}
              >
                VIEW RESULTS
              </button>
              <button
                type="button"
                className="w-full border border-black py-4 text-xs tracking-[0.15em]"
                onClick={clear}
              >
                CLEAR ALL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterSection({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <div className="border-b border-black/10 py-6">
      <h3 className="text-sm mb-4 tracking-[0.08em]">{title}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex gap-3 text-sm text-black/70">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

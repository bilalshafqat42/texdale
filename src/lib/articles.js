export const articles = [
  {
    slug: "choosing-a-pretreatment-detergent",
    title: "How to choose a pretreatment detergent for consistent scouring",
    date: "2026-03-10",
    author: "Texdale Technical Team",
    category: "Pretreatment",
    excerpt:
      "Uneven scouring is the most common root cause of patchy dyeing. Here's what to check before you standardise on a detergent.",
    body: [
      "Most shade-consistency complaints trace back not to the dye recipe, but to what happened before dyeing even started. A scouring detergent that performs well on one fibre blend can leave residual impurities on another, and those residues show up later as uneven dye uptake.",
      "Three things matter most when evaluating a pretreatment detergent: foam level at your process temperature, performance across your typical hardness range, and rinse-out speed. Low-foam formulations are essential for jet and rope-form machines, where excess foam disrupts liquor circulation.",
      "Run a side-by-side trial on your own fabric and water, not just a supplier's reference swatch. Water hardness varies significantly by site, and it changes how a detergent performs in practice.",
    ],
  },
  {
    slug: "reactive-dyeing-levelling-agents",
    title: "Levelling agents in reactive dyeing: what they actually do",
    date: "2026-02-18",
    author: "Texdale Technical Team",
    category: "Dyeing auxiliaries",
    excerpt:
      "Levelling agents don't fix a bad recipe, but they buy you the time and control a good one needs to land evenly.",
    body: [
      "A levelling agent works by controlling the rate at which dye migrates onto the fibre, giving the dye bath time to distribute evenly before fixation. This matters most on long fabric runs and in machines with less-than-perfect liquor circulation.",
      "The trade-off is exhaustion speed: too much retardation and you lose colour yield, too little and you get tailing or side-to-centre variation. The right dosage depends on your dye class, liquor ratio and machine type.",
      "If you're seeing consistent shade variation across a batch rather than random spotting, that's usually a levelling issue rather than a fixing issue.",
    ],
  },
  {
    slug: "denim-enzyme-wash-consistency",
    title: "Getting consistent enzyme wash-down effects on denim",
    date: "2026-01-22",
    author: "Texdale Technical Team",
    category: "Denim washing",
    excerpt:
      "Enzyme washing replaces a lot of mechanical stone damage, but only if temperature and pH stay tightly controlled batch to batch.",
    body: [
      "Cellulase enzymes are far more temperature- and pH-sensitive than most conventional wash chemistry. A few degrees outside the optimal range changes the wash-down effect meaningfully, which is why batch-to-batch consistency starts with process control, not just the enzyme itself.",
      "Neutral cellulases are more forgiving on fabric strength loss than acid cellulases, which matters for garments that need to survive multiple wash cycles in the field.",
      "Always deactivate the enzyme fully at the end of the cycle. Residual enzyme activity continues degrading the fabric even after the machine stops, which shows up as unexpected strength loss during quality checks.",
    ],
  },
];

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

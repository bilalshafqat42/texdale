export const categories = [
  {
    slug: "pretreatment",
    name: "Pretreatment",
    summary: "Detergents, sequestrants and peroxide stabilisers for scouring and bleaching.",
    intro:
      "Our pretreatment range prepares fabric for even, predictable dyeing and finishing — removing size, oils and natural impurities before colour goes on.",
    faqs: [
      {
        question: "Why does pretreatment quality matter for dyeing results?",
        answer:
          "Uneven scouring leaves residual oils and impurities on the fabric, which show up later as patchy dye uptake. Consistent pretreatment is the single biggest factor in first-time-right dyeing.",
      },
      {
        question: "Are these products suitable for both cotton and cotton-blend fabrics?",
        answer:
          "Yes, the range is formulated for cotton and common cotton blends. Ask our technical team for guidance on synthetic-heavy blends.",
      },
    ],
  },
  {
    slug: "dyeing-auxiliaries",
    name: "Dyeing auxiliaries",
    summary: "Levelling, dispersing and fixing agents for consistent, fast colour.",
    intro:
      "Levelling, dispersing and fixing agents that give consistent shade, batch-to-batch repeatability and strong wash and light fastness.",
    faqs: [
      {
        question: "Do you supply auxiliaries for reactive and disperse dyeing?",
        answer:
          "Yes, the range covers both reactive dyeing on cellulosics and disperse dyeing on polyester, including levelling and fixing agents for each.",
      },
    ],
  },
  {
    slug: "finishing",
    name: "Finishing",
    summary: "Softeners and functional finishes for handle, feel and performance.",
    intro:
      "Softeners and functional finishing agents that shape the final hand-feel, drape and performance of the fabric.",
    faqs: [
      {
        question: "Can finishing agents affect dye fastness?",
        answer:
          "Some cationic softeners can interact with anionic dyes and reduce fastness. Our technical team can recommend a compatible finish for your dye system.",
      },
    ],
  },
  {
    slug: "special-finishes",
    name: "Special finishes",
    summary: "Water and oil repellents, flame retardants, resins.",
    intro:
      "Functional finishes for performance and protective textiles, including water/oil repellency, flame retardancy and durable-press resins.",
    faqs: [
      {
        question: "Are your repellent finishes PFAS-free?",
        answer:
          "We offer both PFAS-free and fluorocarbon-based repellent options. Ask our technical team which fits your performance and compliance requirements.",
      },
    ],
  },
  {
    slug: "denim-washing",
    name: "Denim washing",
    summary: "Enzymes, reducing agents, fixers and anti-back-staining agents.",
    intro:
      "Enzymes, reducing agents and fixing chemistry for consistent denim wash-down effects, batch after batch.",
    faqs: [
      {
        question: "Do your enzymes replace stone washing?",
        answer:
          "Cellulase enzymes can reduce or eliminate the need for pumice stones in many wash-down effects, cutting garment damage and machine wear.",
      },
    ],
  },
  {
    slug: "yarn-lubricants",
    name: "Yarn lubricants",
    summary: "Water-free lubricants and coning oils for lick-roll or precision pump.",
    intro:
      "Water-free lubricants and coning oils formulated for lick-roll and precision-pump application on high-speed knitting and weaving.",
    faqs: [
      {
        question: "Are these lubricants compatible with lick-roll application?",
        answer:
          "Yes, the range is formulated for both lick-roll and precision-pump systems. Let us know your machine setup and we'll confirm the right viscosity grade.",
      },
    ],
  },
];

export const products = [
  {
    slug: "texdale-scour-200",
    category: "pretreatment",
    name: "Texdale Scour 200",
    functionSummary: "Low-foam scouring detergent for continuous and batch preparation.",
    specs: [
      { label: "Appearance", value: "Clear to pale yellow liquid" },
      { label: "Ionic character", value: "Non-ionic" },
      { label: "pH (1% solution)", value: "6.5 - 7.5" },
      { label: "Dosage", value: "2 - 5 g/L" },
    ],
    related: ["texdale-sequest-40", "texdale-perox-stab-10"],
  },
  {
    slug: "texdale-sequest-40",
    category: "pretreatment",
    name: "Texdale Sequest 40",
    functionSummary: "Sequestrant for hard-water preparation and peroxide bleaching.",
    specs: [
      { label: "Appearance", value: "Clear liquid" },
      { label: "Ionic character", value: "Anionic" },
      { label: "pH (1% solution)", value: "4.0 - 5.5" },
      { label: "Dosage", value: "1 - 3 g/L" },
    ],
    related: ["texdale-scour-200", "texdale-perox-stab-10"],
  },
  {
    slug: "texdale-perox-stab-10",
    category: "pretreatment",
    name: "Texdale Perox-Stab 10",
    functionSummary: "Peroxide stabiliser for consistent hydrogen peroxide bleaching.",
    specs: [
      { label: "Appearance", value: "Clear liquid" },
      { label: "Ionic character", value: "Anionic" },
      { label: "pH (1% solution)", value: "10.0 - 11.5" },
      { label: "Dosage", value: "1 - 4 g/L" },
    ],
    related: ["texdale-scour-200", "texdale-sequest-40"],
  },
  {
    slug: "texdale-level-rd",
    category: "dyeing-auxiliaries",
    name: "Texdale Level RD",
    functionSummary: "Levelling agent for reactive and direct dyeing on cellulosics.",
    specs: [
      { label: "Appearance", value: "Pale yellow liquid" },
      { label: "Ionic character", value: "Non-ionic / anionic blend" },
      { label: "pH (1% solution)", value: "6.0 - 7.0" },
      { label: "Dosage", value: "0.5 - 2 g/L" },
    ],
    related: ["texdale-fix-pw", "texdale-disp-hs"],
  },
  {
    slug: "texdale-disp-hs",
    category: "dyeing-auxiliaries",
    name: "Texdale Disp HS",
    functionSummary: "High-temperature dispersing agent for disperse dyeing on polyester.",
    specs: [
      { label: "Appearance", value: "Brown liquid" },
      { label: "Ionic character", value: "Anionic" },
      { label: "pH (1% solution)", value: "6.5 - 8.0" },
      { label: "Dosage", value: "0.5 - 1.5 g/L" },
    ],
    related: ["texdale-level-rd", "texdale-fix-pw"],
  },
  {
    slug: "texdale-fix-pw",
    category: "dyeing-auxiliaries",
    name: "Texdale Fix PW",
    functionSummary: "Formaldehyde-free fixing agent for improved wash and rub fastness.",
    specs: [
      { label: "Appearance", value: "Clear liquid" },
      { label: "Ionic character", value: "Cationic" },
      { label: "pH (1% solution)", value: "4.5 - 6.0" },
      { label: "Dosage", value: "1 - 3% owf" },
    ],
    related: ["texdale-level-rd", "texdale-disp-hs"],
  },
  {
    slug: "texdale-soft-cs",
    category: "finishing",
    name: "Texdale Soft CS",
    functionSummary: "Cationic silicone softener for a smooth, supple hand-feel.",
    specs: [
      { label: "Appearance", value: "White emulsion" },
      { label: "Ionic character", value: "Cationic" },
      { label: "pH (1% solution)", value: "5.0 - 6.5" },
      { label: "Dosage", value: "1 - 3% owf" },
    ],
    related: ["texdale-hydrophil-20"],
  },
  {
    slug: "texdale-hydrophil-20",
    category: "finishing",
    name: "Texdale Hydrophil 20",
    functionSummary: "Hydrophilic softener that retains absorbency for towelling and workwear.",
    specs: [
      { label: "Appearance", value: "White emulsion" },
      { label: "Ionic character", value: "Non-ionic" },
      { label: "pH (1% solution)", value: "5.5 - 7.0" },
      { label: "Dosage", value: "1 - 4% owf" },
    ],
    related: ["texdale-soft-cs"],
  },
  {
    slug: "texdale-repel-fc",
    category: "special-finishes",
    name: "Texdale Repel FC",
    functionSummary: "Durable water and oil repellent finish for performance textiles.",
    specs: [
      { label: "Appearance", value: "White emulsion" },
      { label: "Ionic character", value: "Non-ionic" },
      { label: "pH (1% solution)", value: "5.0 - 6.5" },
      { label: "Dosage", value: "3 - 6% owf" },
    ],
    related: ["texdale-fr-back"],
  },
  {
    slug: "texdale-fr-back",
    category: "special-finishes",
    name: "Texdale FR-Back",
    functionSummary: "Durable flame-retardant back-coating for upholstery and contract textiles.",
    specs: [
      { label: "Appearance", value: "White paste" },
      { label: "Ionic character", value: "Anionic" },
      { label: "pH (1% solution)", value: "6.0 - 7.5" },
      { label: "Dosage", value: "As per coating formulation" },
    ],
    related: ["texdale-repel-fc"],
  },
  {
    slug: "texdale-cellu-wash",
    category: "denim-washing",
    name: "Texdale Cellu-Wash",
    functionSummary: "Neutral cellulase enzyme for low-damage denim wash-down effects.",
    specs: [
      { label: "Appearance", value: "Brown liquid" },
      { label: "Activity", value: "Neutral cellulase" },
      { label: "Optimal pH", value: "6.0 - 7.0" },
      { label: "Optimal temperature", value: "50 - 55°C" },
    ],
    related: ["texdale-anti-back-x", "texdale-redux-40"],
  },
  {
    slug: "texdale-redux-40",
    category: "denim-washing",
    name: "Texdale Redux 40",
    functionSummary: "Reducing agent for consistent indigo bleach-back effects.",
    specs: [
      { label: "Appearance", value: "White powder" },
      { label: "Ionic character", value: "N/A" },
      { label: "pH (1% solution)", value: "5.0 - 6.0" },
      { label: "Dosage", value: "2 - 6 g/L" },
    ],
    related: ["texdale-cellu-wash", "texdale-anti-back-x"],
  },
  {
    slug: "texdale-anti-back-x",
    category: "denim-washing",
    name: "Texdale Anti-Back X",
    functionSummary: "Anti-back-staining agent that keeps indigo off pocket bags and lining.",
    specs: [
      { label: "Appearance", value: "Pale yellow liquid" },
      { label: "Ionic character", value: "Cationic" },
      { label: "pH (1% solution)", value: "4.5 - 6.0" },
      { label: "Dosage", value: "1 - 2 g/L" },
    ],
    related: ["texdale-cellu-wash", "texdale-redux-40"],
  },
  {
    slug: "texdale-lube-lr",
    category: "yarn-lubricants",
    name: "Texdale Lube LR",
    functionSummary: "Water-free lick-roll lubricant for high-speed circular knitting.",
    specs: [
      { label: "Appearance", value: "Pale yellow oil" },
      { label: "Viscosity (40°C)", value: "18 - 22 cSt" },
      { label: "Flash point", value: "> 180°C" },
      { label: "Application", value: "Lick-roll" },
    ],
    related: ["texdale-lube-pp"],
  },
  {
    slug: "texdale-lube-pp",
    category: "yarn-lubricants",
    name: "Texdale Lube PP",
    functionSummary: "Precision-pump coning oil for weaving preparation.",
    specs: [
      { label: "Appearance", value: "Pale yellow oil" },
      { label: "Viscosity (40°C)", value: "12 - 16 cSt" },
      { label: "Flash point", value: "> 180°C" },
      { label: "Application", value: "Precision pump" },
    ],
    related: ["texdale-lube-lr"],
  },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}

export function getProduct(categorySlug, productSlug) {
  return products.find((p) => p.category === categorySlug && p.slug === productSlug);
}

export function getRelatedProducts(product) {
  return (product.related || [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);
}

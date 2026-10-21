export const categories = [
  {
    slug: "pretreatment",
    tags: "Wetting agents · Detergents · Sequestrants · Peroxide stabilisers",
    name: "Pretreatment",
    image: "/pretreatment.jpg",
    summary: "Wetting agents, detergents, sequestrants and peroxide stabilisers.",
    intro:
      "Our pretreatment range prepares fabric for even, predictable dyeing and finishing. It removes size, oils and natural impurities before colour goes on.",
    faqs: [
      {
        question: "Why does pretreatment quality matter for dyeing results?",
        answer:
          "Uneven scouring leaves residual oils and impurities on the fabric, which show up later as patchy dye uptake. Consistent pretreatment is one of the biggest factors in first-time-right dyeing.",
      },
    ],
  },
  {
    slug: "dyeing-auxiliaries",
    tags: "Washing · Levelling · Dispersing · Fixing",
    name: "Dyeing auxiliaries",
    image: "/dyeing-auxiliaries.jpg",
    summary: "Dispersing, washing, levelling and formaldehyde-free fixing agents.",
    intro:
      "Dispersing, washing, levelling and fixing agents for reactive, VAT and disperse dyeing, formulated for consistent shade and colour fastness.",
    faqs: [
      {
        question: "Do you offer formaldehyde-free fixing agents?",
        answer:
          "Yes. Several of our fixing agents (the Dalefix range) are formulated to be formaldehyde-free or low-formaldehyde while maintaining colour fastness.",
      },
    ],
  },
  {
    slug: "printing",
    tags: "Thickeners · Acrylates · Alginates · Guar gum",
    name: "Printing",
    image: "/printing.jpg",
    summary: "Thickening agents for textile printing.",
    intro:
      "We supply natural and synthetic thickening agents for flat screen, rotary screen, transfer and jet printing: natural thickeners such as alginates and guar gum for cotton, wool and silk, and acrylates for polyester and silk. We use natural-source, biodegradable materials wherever possible.",
    faqs: [],
  },
  {
    slug: "finishing",
    tags: "Silicone softeners · Polyethylene softeners · Wax emulsions",
    name: "Finishing",
    image: "/finishing.jpg",
    summary: "Silicone and micro-emulsion softeners for handle, feel and performance.",
    intro:
      "Silicone and micro-emulsion softeners that shape the final hand-feel, drape and sewability of the fabric, from cost-effective macro emulsions to ultra-smooth silicone micro-emulsions.",
    faqs: [],
  },
  {
    slug: "softening",
    tags: "Hydrophilic softeners · Macro emulsions · Denim softeners",
    name: "Softening",
    image: "/soft-textile.jpg",
    summary: "Smoothing agents, antistatic softeners and denim-specific softeners.",
    intro:
      "Softening agents that function as smoothing and antistatic treatments across textile fibres, including dedicated denim-softening emulsions.",
    faqs: [],
  },
  {
    slug: "denim-washing",
    tags: "Enzymes · Reducing agents · Fixers · Anti back-staining",
    name: "Denim washing",
    image: "/denim-washing.jpg",
    summary:
      "Enzymes, reducing agents, resins, wetting agents, fixers, anti back-staining agents and silicones for denim.",
    intro:
      "Denim washing gives fabric its softness and its faded, worn-in look. Our denim range covers each step of the wash: enzymes for wash-down, reducing agents and resins for effects, wetting agents, fixers for indigo, anti back-staining agents to keep whites clean, and silicones for the final handle.",
    groups: [
      { slug: "enzymes", name: "Enzymes" },
      { slug: "reducing-agents", name: "Reducing agents" },
      { slug: "resins", name: "Resins" },
      { slug: "wetting-agents", name: "Wetting agents" },
      { slug: "fixers", name: "Fixers" },
      { slug: "anti-back-staining", name: "Anti back-staining" },
      { slug: "silicones", name: "Silicones" },
    ],
    faqs: [],
  },
  {
    slug: "special-finishes",
    tags: "Resins · Water & oil repellents · Anti-microbial · Flame retardants",
    name: "Special finishes",
    image: "/special-finishes.jpg",
    summary:
      "Low-formaldehyde resins, water/oil repellents, anti-microbial and flame-retardant finishes.",
    intro:
      "Functional finishes for performance and protective textiles: low-formaldehyde easy-care resins, C6/C8 water and oil repellents, anti-microbial treatments and flame retardants.",
    groups: [
      { slug: "resins", name: "Resins" },
      { slug: "water-repellent", name: "Water repellent" },
      { slug: "flame-retardant", name: "Flame retardant" },
      { slug: "anti-microbial", name: "Anti-microbial" },
    ],
    faqs: [],
  },
  {
    slug: "special-yarn-lubricants",
    tags: "DALEROL water-free · DALEFIL emulsions",
    name: "Special yarn lubricants",
    image: "/special-yarn-lubricants.jpg",
    summary: "DALEROL water-free lubricants and DALEFIL processing agents.",
    intro:
      "Our DALEROL range of water-free sewing-thread lubricants and DALEFIL processing agents smooth knitting, weaving and embroidery yarns for polyester, polyamide, cotton and rayon.",
    groups: [
      { slug: "dalerol", name: "DALEROL water-free" },
      { slug: "dalefil", name: "DALEFIL emulsions" },
    ],
    faqs: [],
  },
];

export const products = [
  // Pretreatment
  {
    slug: "daleclean-wa600",
    category: "pretreatment",
    name: "Daleclean-WA600",
    functionSummary: "Low foaming multi functional non-ionic wetting agent.",
  },
  {
    slug: "daleclean-wa501",
    category: "pretreatment",
    name: "Daleclean-WA501",
    functionSummary: "Exceptional emulsification and removal of waxy and oily contaminants.",
  },
  {
    slug: "daleclean-dz300",
    category: "pretreatment",
    name: "Daleclean-DZ300",
    functionSummary: "Non-ionic low foaming detergent and scouring agent.",
  },
  {
    slug: "daleclean-dz200",
    category: "pretreatment",
    name: "Daleclean-DZ200",
    functionSummary:
      "Non-ionic detergent with excellent wetting properties, suitable for enzyme desizing.",
  },
  {
    slug: "daleclean-d550",
    category: "pretreatment",
    name: "Daleclean-D550",
    functionSummary: "Very low foaming, non-ionic deaerating agent.",
  },
  {
    slug: "daleclean-csd",
    category: "pretreatment",
    alsoIn: [{ category: "denim-washing", group: "wetting-agents" }],
    name: "Daleclean CSD",
    functionSummary:
      "High caustic stable wetting agent, well suited to indigo rope dyeing and denim fabric.",
  },
  {
    slug: "dalesequest-vfn",
    category: "pretreatment",
    name: "Dalesequest-VFN",
    functionSummary: "Highly active, versatile multi-stage sequestrant agent.",
  },
  {
    slug: "dalesequest-vmm",
    category: "pretreatment",
    name: "Dalesequest-VMM",
    functionSummary: "Low cost, nitrogen-free sequestrant, dispersing and levelling agent.",
  },
  {
    slug: "dalesequest-g5000",
    category: "pretreatment",
    name: "Dalesequest-G5000",
    functionSummary: "Highly concentrated multi-function sequestration agent.",
  },
  {
    slug: "dalesequest-rvn",
    category: "pretreatment",
    name: "Dalesequest-RVN",
    functionSummary: "Low cost, multi-functional sequestrant agent.",
  },
  {
    slug: "dalesequest-ehl",
    category: "pretreatment",
    name: "Dalesequest-EHL",
    functionSummary:
      "Sequestrant agent, specially suited to dyeing of metal dyes such as turquoise.",
  },
  {
    slug: "dalesequest-irg",
    category: "pretreatment",
    name: "Dalesequest-IRG",
    functionSummary: "Highly cost-effective glucose-based iron sequestrant.",
  },
  {
    slug: "dalestab-osp",
    category: "pretreatment",
    name: "Dalestab-OSP",
    functionSummary:
      "All-round high-performance organic stabiliser for hydrogen peroxide bleaching.",
  },
  {
    slug: "dalestab-ocb",
    category: "pretreatment",
    name: "Dalestab-OCB",
    functionSummary: "Cost-effective stabiliser for peroxide bleaching.",
  },
  {
    slug: "dalestab-epm",
    category: "pretreatment",
    name: "Dalestab-EPM",
    functionSummary: "Organic stabiliser for hydrogen peroxide bleaching.",
  },

  // Dyeing auxiliaries
  {
    slug: "dalewash-7sk",
    category: "dyeing-auxiliaries",
    name: "Dalewash-7SK",
    functionSummary: "Very effective dispersing and washing agent for reactive dyed fabric.",
  },
  {
    slug: "dalewash-kn330",
    category: "dyeing-auxiliaries",
    name: "Dalewash-KN330",
    functionSummary:
      "Highly concentrated effective washing agent, specially designed for turquoise and blue shades.",
  },
  {
    slug: "dalewash-k400-conc",
    category: "dyeing-auxiliaries",
    name: "Dalewash-K400 Conc",
    functionSummary:
      "Very effective colloidal-based dispersing agent for VAT and reactive dyed fabric.",
  },
  {
    slug: "dalewash-kl20",
    category: "dyeing-auxiliaries",
    name: "Dalewash-KL20",
    functionSummary:
      "Cost-effective colloidal-based dispersing and washing agent for reactive dyeing.",
  },
  {
    slug: "daledye-anc-conc",
    category: "dyeing-auxiliaries",
    name: "Daledye-ANC Conc",
    functionSummary: "High-performance, polymeric dye bath lubricant.",
  },
  {
    slug: "daledye-e2d-conc",
    category: "dyeing-auxiliaries",
    name: "Daledye-E2D Conc",
    functionSummary: "Concentrated and strong levelling/dispersing agent for reactive dyes.",
  },
  {
    slug: "daledye-pnk-new",
    category: "dyeing-auxiliaries",
    name: "Daledye PNK New",
    functionSummary: "Levelling and dispersing agent for polyester and blends.",
  },
  {
    slug: "daledye-pmn",
    category: "dyeing-auxiliaries",
    name: "Daledye-PMN",
    functionSummary: "Low cost, highly efficient cationising agent for pigment dyeing.",
  },
  {
    slug: "dalefix-fef-conc",
    category: "dyeing-auxiliaries",
    name: "Dalefix-FEF Conc",
    functionSummary: "Low-foam dyeing assistant for polyester/cellulosic blends and nylon.",
  },
  {
    slug: "dalefix-fef",
    category: "dyeing-auxiliaries",
    name: "Dalefix-FEF",
    functionSummary:
      "Highly concentrated formaldehyde-free fixing agent for reactive dyed cellulosic fabric.",
  },
  {
    slug: "dalefix-rcn",
    category: "dyeing-auxiliaries",
    name: "Dalefix-RCN",
    functionSummary: "Cost-effective formaldehyde-free fixing agent for effective colour fastness.",
  },
  {
    slug: "dalefix-fxn",
    category: "dyeing-auxiliaries",
    name: "Dalefix-FXN",
    functionSummary: "Low-formaldehyde fixing agent for reactive dyes.",
  },
  {
    slug: "dalefix-bsn",
    category: "dyeing-auxiliaries",
    name: "Dalefix-BSN",
    functionSummary: "Cost-effective, low-formaldehyde fixing agent for reactive dyes.",
  },
  {
    slug: "daledye-cpd",
    category: "dyeing-auxiliaries",
    name: "Daledye-CPD",
    functionSummary: "Strong, low-formaldehyde fixing agent for reactive dyes.",
  },

  // Finishing
  {
    slug: "dalesoft-vm80",
    category: "finishing",
    name: "Dalesoft-VM80",
    functionSummary: "Cost-effective, high-solid micro-emulsion silicone softener.",
  },
  {
    slug: "dalesoft-nyd20",
    category: "finishing",
    name: "Dalesoft-NYD20",
    functionSummary: "Highly concentrated micro-emulsion for all types of fabrics.",
  },
  {
    slug: "dalesoft-mac",
    category: "finishing",
    name: "Dalesoft-MAC",
    functionSummary: "Macro emulsion for durable and wash-resistant finishes.",
  },
  {
    slug: "dalesoft-vm22",
    category: "finishing",
    name: "Dalesoft-VM22",
    functionSummary:
      "Soft handle with drape, plus crease recovery, sewability, strength and abrasion-resistance improvements.",
  },
  {
    slug: "dalesoft-vmh",
    category: "finishing",
    name: "Dalesoft-VMH",
    functionSummary: "Silicone micro-emulsion for use in harsh processing conditions.",
  },
  {
    slug: "dalesoft-ns1",
    category: "finishing",
    name: "Dalesoft-NS1",
    functionSummary: "Silicone semi-micro emulsion for an ultra-smooth handle.",
  },
  {
    slug: "dalesoft-w1c-conc",
    category: "finishing",
    name: "Dalesoft-W1C conc",
    functionSummary: "Hydrophilic micro-emulsion silicone softener and anti-static agent.",
  },
  {
    slug: "dalesoft-knb",
    category: "finishing",
    name: "Dalesoft-KNB",
    functionSummary: "Cost-effective hydrophilic micro-emulsion softener for towelling.",
  },
  {
    slug: "dalesoft-pdy",
    category: "finishing",
    name: "Dalesoft-PDY",
    functionSummary: "Anti-static properties and effective hydrophilic features.",
  },
  {
    slug: "dalesoft-sl-30",
    category: "finishing",
    name: "Dalesoft-SL-30",
    functionSummary: "Non-ionic polyethylene-based softener which improves sewability.",
  },
  {
    slug: "dalesoft-sl",
    category: "finishing",
    name: "Dalesoft-SL",
    functionSummary: "Non-ionic, high-quality and cost-effective polyethylene softener.",
  },
  {
    slug: "dalesoft-hpe",
    category: "finishing",
    name: "Dalesoft-HPE",
    functionSummary:
      "Superior-grade high-density polyethylene wax emulsion for sewability improvement.",
  },
  {
    slug: "dalesoft-slw",
    category: "finishing",
    name: "Dalesoft-SLW",
    functionSummary: "Very cost-effective primary polyethylene wax-based softener.",
  },
  {
    slug: "dalesoft-sol",
    category: "finishing",
    name: "Dalesoft-SOL",
    functionSummary: "Fatty-acid-based cationic softener.",
  },
  {
    slug: "dalewash-a50",
    category: "finishing",
    name: "Dalewash-A50",
    functionSummary:
      "Cost-effective colloidal-based dispersing and washing agent for reactive dyeing.",
  },

  // Softening
  {
    slug: "denimsoft-mc",
    category: "softening",
    alsoIn: [{ category: "denim-washing", group: "silicones" }],
    name: "Denimsoft-MC",
    functionSummary:
      "Highly concentrated hydrophilic softener giving a smooth handle across fibre types.",
  },
  {
    slug: "denimsoft-nma",
    category: "softening",
    alsoIn: [{ category: "denim-washing", group: "silicones" }],
    name: "Denimsoft-NMA",
    functionSummary:
      "Cost-effective, highly concentrated macro emulsion for cotton, cellulosic and synthetic blends.",
  },
  {
    slug: "denimsoft-akm",
    category: "softening",
    alsoIn: [{ category: "denim-washing", group: "silicones" }],
    name: "Denimsoft-AKM",
    functionSummary:
      "Highly concentrated macro emulsion for cotton, cellulosic and synthetic blends.",
  },

  // Denim washing
  {
    slug: "desize-enz",
    category: "denim-washing",
    group: "enzymes",
    name: "Desize-ENZ",
    functionSummary:
      "Removes starch and sizes from all types of textiles, with optimum results for denim washing.",
  },
  {
    slug: "dalewash-mra",
    category: "denim-washing",
    group: "reducing-agents",
    name: "Dalewash-MRA",
    functionSummary:
      "Concentrated reducing agent for removing manganese dioxide, working at temperatures as low as 20°C. Also used for dechlorination after hypochlorite bleaching.",
  },
  {
    slug: "dalecare-ct",
    category: "denim-washing",
    group: "resins",
    name: "Dalecare-CT",
    functionSummary:
      "Self-catalysed easy-care finishing agent for 3D permanent effects, also suited to grey-shade and unwashed looks.",
  },
  {
    slug: "dalecare-ff",
    category: "denim-washing",
    group: "resins",
    name: "Dalecare-FF",
    functionSummary:
      "Self-catalysed, formaldehyde-free resin for wash-and-wear finishes on cellulose.",
  },
  {
    slug: "dalecare-rct",
    category: "denim-washing",
    group: "resins",
    name: "Dalecare-RCT",
    functionSummary: "Formaldehyde-free resin for cotton, cellulose and synthetic blends.",
  },
  {
    slug: "dalecare-3de",
    category: "denim-washing",
    group: "resins",
    name: "Dalecare-3DE",
    functionSummary: "Highly concentrated, water-soluble resin that enhances 3D effects.",
  },
  {
    slug: "dalewash-lf",
    category: "denim-washing",
    group: "wetting-agents",
    name: "Dalewash-LF",
    functionSummary:
      "Cost-effective, low-foam, non-ionic wetting agent that performs across all process conditions.",
  },
  {
    slug: "dalewash-dcb",
    category: "denim-washing",
    group: "wetting-agents",
    name: "Dalewash-DCB",
    functionSummary: "Highly alkali-stable detergent for indigo dyeing.",
  },
  {
    slug: "dalefix-xbf-conc",
    category: "denim-washing",
    group: "fixers",
    name: "Dalefix-XBF Conc",
    functionSummary:
      "Highly concentrated, formaldehyde-free fixing agent for indigo. Improves rubbing fastness and wet crocking.",
  },
  {
    slug: "dalefix-flz",
    category: "denim-washing",
    group: "fixers",
    name: "Dalefix-FLZ",
    functionSummary:
      "Low-cost, formaldehyde-free fixing agent with strong fixing properties on cotton and indigo.",
  },
  {
    slug: "dalefix-xol",
    category: "denim-washing",
    group: "fixers",
    name: "Dalefix-XOL",
    functionSummary: "Low-formaldehyde fixing agent for indigo-dyed fabric.",
  },
  {
    slug: "daledisperse-brm",
    category: "denim-washing",
    group: "anti-back-staining",
    name: "Daledisperse-BRM",
    functionSummary:
      "Anti back-staining agent designed for indigo washing, effective across a broad pH range.",
  },
  {
    slug: "daledisperse-dnv-conc",
    category: "denim-washing",
    group: "anti-back-staining",
    name: "Daledisperse-DNV Conc",
    functionSummary: "Concentrated anti back-staining agent that can be diluted 1:3 with water.",
  },
  {
    slug: "daledisperse-aza",
    category: "denim-washing",
    group: "anti-back-staining",
    name: "Daledisperse-AZA",
    functionSummary:
      "Dispersing agent for all fabric types, especially indigo-dyed denim. Resistant to water hardness.",
  },
  {
    slug: "daledisperse-cos",
    category: "denim-washing",
    group: "anti-back-staining",
    name: "Daledisperse-COS",
    functionSummary: "Very cost-effective anti back-staining agent for all fabric types.",
  },

  // Special finishes
  {
    slug: "easy-finish-lor",
    category: "special-finishes",
    group: "resins",
    name: "Easy Finish-LOR",
    functionSummary: "Very low-formaldehyde, low-temperature curing resin.",
  },
  {
    slug: "easy-finish-pcr",
    category: "special-finishes",
    group: "resins",
    name: "Easy Finish-PCR",
    functionSummary: "Very low-formaldehyde pre-catalyzed resin.",
  },
  {
    slug: "easy-finish-fbo",
    category: "special-finishes",
    group: "resins",
    name: "Easy Finish-FBO",
    functionSummary: "Formaldehyde-free resin for crease-recovery finishes.",
  },
  {
    slug: "easy-finish-4030",
    category: "special-finishes",
    group: "resins",
    name: "Easy Finish-4030",
    functionSummary: "Highly concentrated, low-formaldehyde resin for easy-care finishes.",
  },
  {
    slug: "easy-finish-2010",
    category: "special-finishes",
    group: "resins",
    name: "Easy Finish-2010",
    functionSummary: "Very low-formaldehyde resin.",
  },
  {
    slug: "easy-finish-lr",
    category: "special-finishes",
    group: "resins",
    name: "Easy Finish-LR",
    functionSummary: "Cost-effective low-formaldehyde resin.",
  },
  {
    slug: "daleguard-wc6",
    category: "special-finishes",
    group: "water-repellent",
    name: "Daleguard-WC6",
    functionSummary: "Oil, water and stain repellent with C6 technology.",
  },
  {
    slug: "daleguard-nld",
    category: "special-finishes",
    group: "water-repellent",
    name: "Daleguard-NLD",
    functionSummary: "Low cost oil, water and stain repellent with C6 technology.",
  },
  {
    slug: "daleguard-wr6",
    category: "special-finishes",
    group: "water-repellent",
    name: "Daleguard-WR6",
    functionSummary: "C6-based, cost-effective oil and water repellent.",
  },
  {
    slug: "daleguard-fcg",
    category: "special-finishes",
    group: "water-repellent",
    name: "Daleguard-FCG",
    functionSummary: "C8-based oil and water repellent for durable wash requirements.",
  },
  {
    slug: "daleguard-fcsp",
    category: "special-finishes",
    group: "water-repellent",
    name: "Daleguard-FCSP",
    functionSummary: "C6-based stain-release agent for durable wash requirements.",
  },
  {
    slug: "microbial-phm",
    category: "special-finishes",
    group: "anti-microbial",
    name: "Microbial-PHM",
    functionSummary: "Durable odour control and anti-microbial protection.",
  },
  {
    slug: "microbial-dnd",
    category: "special-finishes",
    group: "anti-microbial",
    name: "Microbial-DND",
    functionSummary:
      "Highly durable silver-based microbial protection, approved by EPA and EU regulators.",
  },
  {
    slug: "microbial-bkv",
    category: "special-finishes",
    group: "anti-microbial",
    name: "Microbial-BKV",
    functionSummary: "Highly effective broad-spectrum protection against fungi and bacteria.",
  },
  {
    slug: "microbial-km80",
    category: "special-finishes",
    group: "anti-microbial",
    name: "Microbial-KM80",
    functionSummary: "Anti-insect and anti-allergenic protection.",
  },
  {
    slug: "microbial-br-ps",
    category: "special-finishes",
    group: "anti-microbial",
    name: "Microbial-BR-PS",
    functionSummary: "Durable odour control and anti-microbial protection.",
  },
  {
    slug: "microbial-mnp",
    category: "special-finishes",
    group: "anti-microbial",
    name: "Microbial-MNP",
    functionSummary: "Durable anti-microbial protection.",
  },
  {
    slug: "daleflame-nv3",
    category: "special-finishes",
    group: "flame-retardant",
    name: "Daleflame-NV3",
    functionSummary: "Non-durable flame retardant for cotton, cellulosics and synthetics.",
  },
  {
    slug: "daleflame-sem",
    category: "special-finishes",
    group: "flame-retardant",
    name: "Daleflame-SEM",
    functionSummary: "Semi-durable flame retardant for cotton, cellulosics and synthetics.",
  },
  {
    slug: "daleflame-frb",
    category: "special-finishes",
    group: "flame-retardant",
    name: "Daleflame-FRB",
    functionSummary:
      "Semi-durable flame retardant for cotton, cellulosics and synthetics, developed for high-hazard areas.",
  },
  {
    slug: "daleflame-per50",
    category: "special-finishes",
    group: "flame-retardant",
    name: "Daleflame-PER50",
    functionSummary: "Durable flame retardant for cotton, cellulosics and synthetics.",
  },

  // Special yarn lubricants
  {
    slug: "dalerol-pfr",
    category: "special-yarn-lubricants",
    group: "dalerol",
    name: "DALEROL® PFR",
    functionSummary:
      "Sewing thread cold-melt lubricant for endless or fibre yarns of polyester or polyamide, applied by lick-roll technique.",
  },
  {
    slug: "dalerol-shq",
    category: "special-yarn-lubricants",
    group: "dalerol",
    name: "DALEROL® SHQ",
    functionSummary:
      "Sewing thread hot-melt lubricant for endless or fibre yarns of polyester or polyamide, applied by lick-roll technique.",
  },
  {
    slug: "dalefil-ybl",
    category: "special-yarn-lubricants",
    group: "dalefil",
    name: "DALEFIL® YBL",
    functionSummary:
      "Highly effective processing agent for smoothing knitting, weaving and embroidery yarns by the exhaust method. Covers synthetic fibres, cotton and rayon.",
  },
  {
    slug: "dalefil-yem",
    category: "special-yarn-lubricants",
    group: "dalefil",
    name: "DALEFIL® YEM",
    functionSummary:
      "Cost-effective processing agent for smoothing knitting, weaving and embroidery yarns by the exhaust method. Also suitable for synthetic fibres, cotton and rayon.",
  },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug, groupSlug) {
  return products
    .map((p) => {
      if (p.category === categorySlug) return p;
      const shared = p.alsoIn?.find((a) => a.category === categorySlug);
      return shared ? { ...p, group: shared.group } : null;
    })
    .filter((p) => p && (!groupSlug || p.group === groupSlug));
}

export function getProduct(categorySlug, productSlug) {
  return products.find((p) => p.category === categorySlug && p.slug === productSlug);
}

// Same range, with products of the same type (group) listed first.
export function getRelatedProducts(product, count = 3) {
  const sameRange = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const sameGroup = sameRange.filter((p) => product.group && p.group === product.group);
  return [...sameGroup, ...sameRange.filter((p) => !sameGroup.includes(p))].slice(0, count);
}

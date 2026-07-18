/**
 * Design reminder: product data supports the Architectural Material Gallery direction—accurate imagery,
 * concise specifications, and restrained premium language. Never add pricing or unsupported claims.
 */

export type ProductSample = {
  name: string;
  image: string;
  note?: string;
  presentation?: "standard" | "narrow";
};

export type ProductCategory = {
  id: string;
  navLabel: string;
  name: string;
  kicker: string;
  description: string;
  size: string;
  colorStatement: string;
  applications: string;
  heroImage: string;
  features: string[];
  samples: ProductSample[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "uv-marble",
    navLabel: "UV Marble",
    name: "UV Marble Panels",
    kicker: "Polished architectural surfaces",
    description:
      "Solid, flat marble-look panels with a polished UV-finished surface for the visual impact of natural stone in kitchens, bathrooms, hotel rooms, feature walls, and commercial interiors.",
    size: "4 ft × 8 ft panels",
    colorStatement: "Multiple marble patterns and vein colors",
    applications: "Interior walls, backsplashes, showers, bathrooms, lobbies, and hospitality spaces",
    heroImage: "./assets/enhanced_white_gray_marble.png",
    features: ["Waterproof surface", "Easy installation", "Low-maintenance finish", "Solid flat construction"],
    samples: [
      { name: "Black / White Vein", image: "./assets/enhanced_black_marble.png" },
      { name: "Gray / Gold Vein", image: "./assets/enhanced_gray_gold_marble.png" },
      { name: "White / Brown Vein", image: "./assets/enhanced_white_brown_marble.png" },
      { name: "Classic White / Gray", image: "./assets/enhanced_white_gray_marble.png" },
      { name: "Black / Bold Gold", image: "./assets/enhanced_black_gold_bold_marble.png" },
      { name: "White / Copper Vein", image: "./assets/enhanced_white_copper_marble.png" },
    ],
  },
  {
    id: "pvc-wood",
    navLabel: "PVC Wood",
    name: "PVC Wood Decorative Panels",
    kicker: "Warm linear texture",
    description:
      "Slim fluted wood-look PVC panels for clean contemporary feature walls. This collection is decorative and non-acoustic, with six finishes for coordinated residential and commercial interiors.",
    size: "0.5 ft × 9 ft panels",
    colorStatement: "Six wood and solid-color finishes",
    applications: "Living rooms, reception areas, hallways, retail, offices, and decorative partitions",
    heroImage: "./assets/enhanced_wood_natural_oak.png",
    features: ["Decorative non-acoustic panel", "Lightweight format", "Easy installation", "Six finish options"],
    samples: [
      { name: "Dark Walnut", image: "./assets/enhanced_wood_dark_walnut.png" },
      { name: "Natural Oak", image: "./assets/enhanced_wood_natural_oak.png" },
      { name: "Teak", image: "./assets/enhanced_wood_teak.png" },
      { name: "Modern Gray", image: "./assets/enhanced_wood_gray.png" },
      { name: "Matte Black", image: "./assets/enhanced_wood_black.png" },
      { name: "Pure White", image: "./assets/enhanced_wood_white.png" },
    ],
  },
  {
    id: "acoustic-wood",
    navLabel: "Acoustic Wood",
    name: "Acoustic Wood Panels",
    kicker: "Texture with sound absorption",
    description:
      "Wood slats mounted over dense black acoustic felt create a refined linear wall while helping soften room acoustics—ideal for media rooms, offices, hospitality, and shared spaces.",
    size: "2 ft × 8 ft panels",
    colorStatement: "Four wood finishes on black felt",
    applications: "Media rooms, offices, conference rooms, hospitality, studios, and living spaces",
    heroImage: "./assets/enhanced_acoustic_walnut.png",
    features: ["Acoustic felt backing", "Sound-absorbing design", "Easy installation", "Four finish options"],
    samples: [
      { name: "Walnut", image: "./assets/enhanced_acoustic_walnut.png" },
      { name: "Natural Oak", image: "./assets/enhanced_acoustic_oak.png" },
      { name: "Modern Gray", image: "./assets/enhanced_acoustic_gray.png" },
      { name: "Teak", image: "./assets/enhanced_acoustic_teak.png" },
      {
        name: "Acoustic Felt Backing",
        image: "./assets/enhanced_acoustic_back_view.png",
        note: "Back view",
        presentation: "narrow",
      },
    ],
  },
  {
    id: "pu-stone",
    navLabel: "PU Stone",
    name: "PU Stone Decorative Panels",
    kicker: "Dimensional stone character",
    description:
      "Textured PU decorative panels recreate the depth and character of split stone in a practical, lightweight format. Rough-stone colors and open geometric cutouts provide options for subtle or bold walls, with multiple designs available.",
    size: "2 ft × 4 ft panels",
    colorStatement: "Five stone colors plus black and white cutouts; multiple designs available",
    applications:
      "Showers, bathrooms, interior and exterior feature walls, entries, fireplaces, hospitality, and commercial spaces",
    heroImage: "./assets/enhanced_stone_type1_beige.png",
    features: ["Waterproof", "Indoor & outdoor use", "Shower & bathroom ready", "Easy installation"],
    samples: [
      { name: "Stone White", image: "./assets/enhanced_stone_type1_white.png" },
      { name: "Charcoal", image: "./assets/enhanced_stone_type1_charcoal.png" },
      { name: "Warm Beige", image: "./assets/enhanced_stone_type1_beige.png" },
      { name: "Sandstone Tan", image: "./assets/enhanced_stone_type1_tan.png" },
      { name: "Light Gray", image: "./assets/enhanced_stone_type1_light_gray.png" },
      {
        name: "Geometric Cutout — Black",
        image: "./assets/pu-stone-geometric-black-refined.png",
        presentation: "narrow",
      },
      {
        name: "Geometric Cutout — White",
        image: "./assets/pu-stone-geometric-white-refined.png",
        presentation: "narrow",
      },
    ],
  },
  {
    id: "white-pu-stone",
    navLabel: "White PU Stone",
    name: "White PU Stone Sheets",
    kicker: "Tall, rugged relief",
    description:
      "A tall white PU stone sheet with pronounced relief. It creates a bright monolithic feature surface while retaining the lightweight handling and practical installation benefits of a decorative panel system.",
    size: "2 ft × 8 ft sheets",
    colorStatement: "Natural white finish",
    applications: "Showers, bathrooms, interior and exterior walls, entries, fireplaces, retail, and hospitality",
    heroImage: "./assets/enhanced_white_stone_8ft.png",
    features: ["Waterproof", "Indoor & outdoor use", "Deep stone texture", "Easy installation"],
    samples: [{ name: "Natural White", image: "./assets/enhanced_white_stone_8ft.png" }],
  },
  {
    id: "white-natural-stone",
    navLabel: "Natural Stone",
    name: "White Natural Stone",
    kicker: "Authentic split-face material",
    description:
      "Real pale natural stone in rectangular and modular formats. Each piece carries unique mineral tone, edge detail, and texture for timeless interior or exterior masonry applications.",
    size: "Multiple formats; less than 1 in. thick",
    colorStatement: "Natural white, cream, beige, and subtle blush variation",
    applications: "Exterior façades, entry walls, fireplaces, columns, landscaping, and interior features",
    heroImage: "./assets/white-natural-stone-assortment-refined.png",
    features: ["Genuine natural stone", "Less than 1 in. thick", "Indoor & outdoor use", "Multiple formats"],
    samples: [
      {
        name: "Modular White Natural Stone",
        image: "./assets/white-natural-stone-assortment-refined.png",
      },
      {
        name: "Surface & Format Detail",
        image: "./assets/white-natural-stone-detail-refined.png",
      },
      {
        name: "Completed Exterior Installation",
        image: "./assets/white-natural-stone-home-installation-refined.png",
      },
    ],
  },
];

export const applicationImages = [
  {
    title: "UV Marble in hospitality",
    description: "A polished marble-look wall brings calm scale to a modern hotel suite.",
    image: "./assets/staged_13_marble_hotel.png",
  },
  {
    title: "Acoustic wood in a media room",
    description: "Warm slats and black felt give entertainment spaces both order and acoustic comfort.",
    image: "./assets/nova-acoustic-application.png",
  },
  {
    title: "PU Stone in a modern shower",
    description: "Waterproof relief panels bring warm dimensional texture to a clean, contemporary bathroom.",
    image: "./assets/pu-stone-shower-staging.png",
  },
  {
    title: "White Natural Stone exterior",
    description: "A completed residence shows the authentic scale, texture, and quiet tonal variation of real stone.",
    image: "./assets/white-natural-stone-home-installation-refined.png",
  },
];

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sku: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "na-001",
    name: "Trailblazer Bolt-Action",
    price: 899.0,
    image: "/placeholder.svg",
    description:
      "Precision-engineered bolt-action built for reliability in the harshest conditions.",
    sku: "NA-TRAILBLAZER-001",
    category: "Rifles",
  },
  {
    id: "na-002",
    name: "Shadowline 9mm",
    price: 649.0,
    image: "/placeholder.svg",
    description:
      "Compact, high-contrast ergonomics with crisp trigger and low recoil profile.",
    sku: "NA-SHADOWLINE-002",
    category: "Pistols",
  },
  {
    id: "na-003",
    name: "Ridgeway Shotgun 12G",
    price: 749.0,
    image: "/placeholder.svg",
    description:
      "Balanced pump-action with reinforced receiver and smooth cycling.",
    sku: "NA-RIDGEWAY-003",
    category: "Shotguns",
  },
  {
    id: "na-004",
    name: "Sentinel .308",
    price: 1199.0,
    image: "/placeholder.svg",
    description:
      "Semi-auto platform tuned for accuracy and endurance in the field.",
    sku: "NA-SENTINEL-004",
    category: "Rifles",
  },
  {
    id: "na-005",
    name: "Trail Scout .22 LR",
    price: 299.0,
    image: "/placeholder.svg",
    description:
      "Lightweight .22 trainer with rugged polymer stock and adjustable sights.",
    sku: "NA-SCOUT-005",
    category: "Rifles",
  },
  {
    id: "na-006",
    name: "Nightfall Compact .45",
    price: 679.0,
    image: "/placeholder.svg",
    description:
      "Concealable .45 with enhanced grip texture and low-profile night sights.",
    sku: "NA-NIGHTFALL-006",
    category: "Pistols",
  },
];

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sku: string;
  category: string;
}

// Asset imports for optimized images
import imgByrnaTCR from "@/assets/products/byrna-tcr.jpg";
import imgColtPythonBlued from "@/assets/products/colt-python-blued.jpg";
import imgColtKingCobra from "@/assets/products/colt-king-cobra.jpg";
import imgGForceLever from "@/assets/products/gforce-lever-rifle.jpg";
import imgCCISuppressorMax from "@/assets/products/cci-suppressor-max-22lr.jpg";
import imgPMCXtac from "@/assets/products/pmc-xtac-556-m855.jpg";
import imgMagtech300blk from "@/assets/products/magtech-300blk-subsonic.jpg";
import imgByrnaSDOrange from "@/assets/products/byrna-sd-orange.jpg";
import imgByrnaProjectiles from "@/assets/products/byrna-projectiles-assortment.jpg";
import imgCustomGlock from "@/assets/products/custom-glock-9mm.jpg";
import imgSigP365X from "@/assets/products/sig-p365x.jpg";
import imgWalkersRazor from "@/assets/products/walkers-razor-slim.jpg";
import imgRugerAmerican9 from "@/assets/products/ruger-american-9mm.jpg";
import imgSigP365XLoose from "@/assets/products/sig-p365x-loose-ammo.jpg";
import imgSWBodyguard380 from "@/assets/products/sw-bodyguard-380.jpg";

export const products: Product[] = [
  {
    id: "byrna-tcr",
    name: "Byrna TCR (Tactical Compact Rifle)",
    price: 599.99,
    image: imgByrnaTCR,
    description:
      "Semi-automatic CO₂-powered less-lethal launcher with tactical ergonomics, extended mags, rails, and adjustable stock. .68 caliber, 11" + " barrel; ideal for home defense, training, and recreation.",
    sku: "NA-BYRNA-TCR",
    category: "Less-Lethal Launcher",
  },
  {
    id: "colt-python-blued",
    name: "Colt Python (Blued)",
    price: 1699.0,
    image: imgColtPythonBlued,
    description:
      "Iconic .357 Magnum revolver famed for precision and buttery-smooth trigger. Vent rib barrel, full underlug, adjustable sights—an enthusiast classic.",
    sku: "NA-COLT-PYTHON-BLUED",
    category: "Handgun",
  },
  {
    id: "colt-king-cobra",
    name: "Colt King Cobra",
    price: 1149.0,
    image: imgColtKingCobra,
    description:
      "Modern .357 Magnum revolver offering strength and reliability with classic styling. 6-shot DA/SA, 6" + " barrel (est.), ramp front sight.",
    sku: "NA-COLT-KINGCOBRA",
    category: "Handgun",
  },
  {
    id: "gforce-arms-lever",
    name: "GForce Arms Lever Rifle (LTAC style)",
    price: 899.0,
    image: imgGForceLever,
    description:
      "Lever-action rifle with modern M-LOK handguard, threaded 16.5" + " barrel, top rail, and FO front sight. Classic operation, modern upgrades.",
    sku: "NA-GFORCE-LEVER",
    category: "Rifle",
  },
  {
    id: "cci-suppressor-max-22lr",
    name: "CCI Suppressor Max .22 LR",
    price: 19.0,
    image: imgCCISuppressorMax,
    description:
      ".22 LR segmented hollow point optimized for suppressors: 45gr, ~970 fps subsonic. Quiet, effective expansion—great for small game and training (100-round packs).",
    sku: "NA-CCI-SUPPMAX-22LR",
    category: "Ammunition",
  },
  {
    id: "pmc-xtac-556-m855",
    name: "PMC X-TAC 5.56 NATO (M855)",
    price: 14.0,
    image: imgPMCXtac,
    description:
      "Green-tip 62gr LAP built to military spec for reliable performance. ~3,100 fps. Solid choice for training and tactical drills (20-round boxes).",
    sku: "NA-PMC-XTAC-M855",
    category: "Ammunition",
  },
  {
    id: "magtech-300blk-subsonic",
    name: "Magtech 300 BLK Subsonic",
    price: 38.0,
    image: imgMagtech300blk,
    description:
      "Heavy 200gr FMJ subsonic loads tailored for suppressed shooting with minimal noise and smooth cycling (50-round boxes).",
    sku: "NA-MAGTECH-300BLK-SUB",
    category: "Ammunition",
  },
  {
    id: "byrna-sd-launcher-orange",
    name: "Byrna SD Launcher Kit (Safety Orange)",
    price: 389.0,
    image: imgByrnaSDOrange,
    description:
      "Compact CO₂-powered personal defense launcher kit. Includes two 5-round mags, projectiles, and CO₂ cartridges. Ambi safety, straight trigger.",
    sku: "NA-BYRNA-SD-ORG",
    category: "Less-Lethal Launcher",
  },
  {
    id: "byrna-projectiles-assortment",
    name: "Byrna Projectiles Assortment",
    price: 52.0,
    image: imgByrnaProjectiles,
    description:
      "Assorted .68 caliber and 12ga less-lethal rounds: Kinetic, Eco-Kinetic, Training, and Pepper payloads. Ideal for practice and defense (check local laws).",
    sku: "NA-BYRNA-PROJ-ASSORT",
    category: "Less-Lethal Ammo",
  },
  {
    id: "custom-glock-pattern-9mm",
    name: "Custom Glock-Pattern 9mm",
    price: 1200.0,
    image: imgCustomGlock,
    description:
      "Custom-built Glock-style pistol with windowed slide, enhanced barrel finish, tall sights, and flared magwell. Tuned for competition and range.",
    sku: "NA-CUSTOM-GLOCK-9",
    category: "Handgun",
  },
  {
    id: "sig-p365x",
    name: "SIG Sauer P365X",
    price: 639.0,
    image: imgSigP365X,
    description:
      "Micro-compact 9mm with optic-ready slide, flat trigger, and XRAY3 sights. 12+1 capacity—an EDC staple for concealed carry.",
    sku: "NA-SIG-P365X",
    category: "Handgun",
  },
  {
    id: "walkers-razor-slim",
    name: "Walker's Razor Slim Electronic Muffs",
    price: 64.0,
    image: imgWalkersRazor,
    description:
      "Low-profile electronic earmuffs that amplify ambient sound while protecting against gunfire. NRR 23 dB, slim foldable design.",
    sku: "NA-WALKERS-RAZOR",
    category: "Hearing Protection",
  },
  {
    id: "ruger-american-9mm",
    name: "Ruger American Pistol (9mm)",
    price: 539.0,
    image: imgRugerAmerican9,
    description:
      "Full-size 9mm duty pistol with ergonomic grip and Novak-style sights. 17+1 capacity and duty-ready reliability for home defense and range.",
    sku: "NA-RUGER-AM-9",
    category: "Handgun",
  },
  {
    id: "sig-p365x-loose-ammo",
    name: "SIG Sauer P365X (loose with ammo)",
    price: 639.0,
    image: imgSigP365XLoose,
    description:
      "P365X variant pictured with magazine and defensive ammo—optic-ready slide, 12+1 capacity. Compact, capable, and carry-focused.",
    sku: "NA-SIG-P365X-AMMO",
    category: "Handgun",
  },
  {
    id: "sw-bodyguard-380",
    name: "S&W Bodyguard 2.0 (.380 ACP)",
    price: 499.0,
    image: imgSWBodyguard380,
    description:
      "Compact .380 ACP pistol for discreet carry. 10+1/12+1 capacity with a 2.75" + " barrel—ideal for deep concealment and backup.",
    sku: "NA-SW-BODYGUARD-380",
    category: "Handgun",
  },
];

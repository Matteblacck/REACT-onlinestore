import type { Product } from "../../types";
import blackBoots1 from './images/boots/blackBoots1.jpg';
import blackBoots2 from './images/boots/blackBoots2.jpg';
import hikingBoots1 from './images/boots/hikingBoots1.jpg';
import hikingBoots2 from './images/boots/hikingBoots2.jpg';
import chelseaBoots1 from './images/boots/chelseaBoots1.jpg';
import chelseaBoots2 from './images/boots/chelseaBoots2.jpg';

export default [
  {
    section: "men",
    category: "shoes",
    subcategory: "boots",
    id: "1",
    name: "Classic Black Boots",
    description: "Stylish black leather boots with durable sole.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [blackBoots1, blackBoots2],
    price: 7300,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "boots",
    id: "2",
    name: "Hiking Boots",
    description: "Water-resistant hiking boots for outdoor adventures.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [hikingBoots1, hikingBoots2],
    price: 8999,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "boots",
    id: "3",
    name: "Chelsea Boots",
    description: "Sleek Chelsea boots with elastic side panels.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [chelseaBoots1, chelseaBoots2],
    price: 8200,
  }
] as Product[];

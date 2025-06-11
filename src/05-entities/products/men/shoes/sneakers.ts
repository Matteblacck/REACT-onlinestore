import type { Product } from "../../types";
import whiteSN from './images/sneakers/whitesneakers.jpg'
import highTop1 from './images/sneakers/highTop1.jpg'
import highTop2 from './images/sneakers/highTop2.jpg'
import run1 from './images/sneakers/run1.jpg'
import run2 from './images/sneakers/run2.jpg'
import chunky1 from './images/sneakers/chunky1.jpg'
import chunky2 from './images/sneakers/chunky2.jpg'
export default [
  {
    section: "men",
    category: "shoes",
    subcategory: "sneakers",
    id: "1",
    name: "Classic White Sneakers",
    description: "Timeless white sneakers with rubber sole.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [whiteSN],
    price: 3409,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "sneakers",
    id: "2",
    name: "High-Top Sneakers",
    description: "Stylish high-top sneakers with lace-up closure.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [highTop1, highTop2],
    price: 5830,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "sneakers",
    id: "3",
    name: "Running Sneakers",
    description: "Breathable sneakers designed for running.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [run1, run2 ],
    price: 8392,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "sneakers",
    id: "4",
    name: "Chunky Sneakers",
    description: "Trendy chunky sneakers with bold design.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [chunky2, chunky1],
    price: 90,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "sneakers",
    id: "5",
    name: "Slip-On Sneakers",
    description: "Easy slip-on sneakers for everyday use.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [],
    price: 55,
  },
  {
    section: "men",
    category: "shoes",
    subcategory: "sneakers",
    id: "6",
    name: "Basketball Sneakers",
    description: "High-performance sneakers for basketball players.",
    sizes: [{ size: "39" }, { size: "40" }, { size: "41" }, { size: "42" }, { size: "43" }, { size: "44" }],
    photos: [],
    price: 100,
  }
] as Product[];

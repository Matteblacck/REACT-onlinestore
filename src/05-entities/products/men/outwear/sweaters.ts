import type { Product } from "../../types";
import negr from './images/sweaters/дев.jpg'
import girl from './images/sweaters/негр.jpg'
import negrvneck from './images/sweaters/negrvneck.jpg'
import turtNekNegt from './images/sweaters/turtleneckSwaet.jpg'
import crewNeck from './images/sweaters/crewneckSweat.jpg'
import stripedfam from './images/sweaters/stripedfam.jpg'
import stripedsolo from './images/sweaters/stripedsolo.jpg'
export default [
  {
    section: "men",
    category: "outwear",
    subcategory: "sweaters",
    id: "6",
    name: "Cable Knit Sweater",
    description: "Warm cable knit sweater in grey.",
    sizes: [{ size: "S" }, { size: "M" }, { size: "L" }, { size: "XL" }],
    photos: [negr, girl],
    price: 6000,
  },
  {
    section: "men",
    category: "outwear",
    subcategory: "sweaters",
    id: "7",
    name: "V-Neck Sweater",
    description: "Classic v-neck sweater in navy blue.",
    sizes: [{ size: "M" }, { size: "L" }],
    photos: [negrvneck],
    price: 50,
  },
  {
    section: "men",
    category: "outwear",
    subcategory: "sweaters",
    id: "8",
    name: "Turtleneck Sweater",
    description: "Cozy turtleneck sweater in black.",
    sizes: [{ size: "S" }, { size: "M" }, { size: "L" }],
    photos: [turtNekNegt],
    price: 55,
  },
  {
    section: "men",
    category: "outwear",
    subcategory: "sweaters",
    id: "9",
    name: "Crewneck Sweater",
    description: "Basic crewneck sweater in beige.",
    sizes: [{ size: "M" }, { size: "L" }, { size: "XL" }],
    photos: [crewNeck],
    price: 48,
  },
  {
    section: "men",
    category: "outwear",
    subcategory: "sweaters",
    id: "10",
    name: "Striped Sweater",
    description: "Color-block striped sweater.",
    sizes: [{ size: "S" }, { size: "M" }, { size: "L" }],
    photos: [stripedsolo, stripedfam],
    price: 62,
  },

] as Product[];
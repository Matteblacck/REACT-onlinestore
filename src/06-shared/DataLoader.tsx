import type { Product } from "../05-entities/products/types";

const productModules: Record<string, { default: Product[] }> = import.meta.glob(
  "../05-entities/products/**/*.ts",
  { eager: true }
);

export const loadProductData = async (
  section: string,
  category?: string,
  subcategory?: string
): Promise<Product[]> => {
  const parts = [section];
  if (category) parts.push(category);
  if (subcategory) parts.push(subcategory);
  const key = `../05-entities/products/${parts.join("/")}.ts`;

  const mod = productModules[key];
  return mod ? mod.default : [];
};
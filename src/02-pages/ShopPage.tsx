import { useParams } from "react-router-dom";
import { ProductCard } from "../03-widgets/ProductCard";
import { loadProductData } from "../06-shared/DataLoader";
import { useEffect, useState } from "react";
import type { Product } from "../05-entities/products/types";
export default function ShopPage() {
  const { section, category, subcategory } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (section) {
        const data = await loadProductData(section, category, subcategory);
        setProducts(data);
      }
    };
    fetchData();
  }, [section, category, subcategory]);

  return (
    <>
        <div className="row">
          {products.length ? (
            products.map((product) => (
              <div
                className="col-6 col-md-6 col-lg-4 mb-3"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p>There are no items in this category</p>
          )}
        </div>
    </>
  );
}

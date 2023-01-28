import React, { useContext, useEffect, useState } from "react";
import styles from "./products.module.css";
import { Card } from "../../components/product-card/card";
import { ProductsContext } from "../../context/products.context";
import { Loading } from "../../components/loading/loading";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
export const ProductsPage = () => {
  const [selecteCategory, setSelectedCategory] = useState(null);
  const { products, loading, fetchProducts, fetchProductsByCategory } =
    useContext(ProductsContext);

  useEffect(() => {
    if (selecteCategory) {
      fetchProductsByCategory(selecteCategory);
    } else {
      fetchProducts();
    }
  }, [selecteCategory]);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${styles.category} ${
              category === selecteCategory ? styles.selectedCategory : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h3>Products</h3>
        {loading ? (
          <div className={styles.loading}>
            <Loading />
          </div>
        ) : (
          <div className={styles.products}>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

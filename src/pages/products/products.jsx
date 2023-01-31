import React, { useContext, useEffect, useState } from "react";
import styles from "./products.module.css";
import { Card } from "../../components/product-card/card";
import { ProductsContext } from "../../context/products.context";
import { Loading } from "../../components/loading/loading";
import { CategoryContext } from "../../context/category.context";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
export const ProductsPage = () => {
  const { products, loading, fetchProducts, fetchProductsByCategory } =
    useContext(ProductsContext);
  const { category, setCategory } = useContext(CategoryContext);
  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category);
    } else {
      fetchProducts();
    }
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories.map((item) => (
          <div
            key={item}
            className={`${styles.category} ${
              item === category ? styles.selectedCategory : ""
            }`}
            onClick={() => setCategory(item)}
          >
            <p>{item}</p>
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

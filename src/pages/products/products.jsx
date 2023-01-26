import React from "react";
import styles from "./products.module.css";
import { products } from "./data";
import { Card } from "../../components/product-card/card";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
export const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category} className={styles.category}>
            <p>{category}</p>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h3>Products</h3>
        <div className={styles.products}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

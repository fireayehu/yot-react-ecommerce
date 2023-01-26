import React from "react";
import styles from "./card.module.css";
export const Card = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.content}>
        <h3>{product.title}</h3>
        <div className={styles.category}>{product.category}</div>
        <h2>{product.price} ETB</h2>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./detail.module.css";
const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};
export const DetailPage = () => {
  return (
    <div className={styles.container}>
      <di className={styles.card}>
        <img src={product.image} alt={product.title} />
        <div className={styles.content}>
          <h4>{product.category}</h4>
          <h2>{product.title}</h2>
          <h1>{product.price} ETB</h1>
          <p>{product.description}</p>
          <button>Add To Cart</button>
        </div>
      </di>
    </div>
  );
};

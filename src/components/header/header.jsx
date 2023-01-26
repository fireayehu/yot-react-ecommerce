import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <h3>Logo</h3>
      </div>
      <ul className={styles.nav}>
        <li>Home</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>
          <button>Register</button>
        </li>
      </ul>
    </header>
  );
};

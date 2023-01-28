import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <Link to="/" className={styles.logo}>
          <h3>Logo</h3>
        </Link>
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

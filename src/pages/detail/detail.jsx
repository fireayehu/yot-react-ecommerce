import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/loading/loading";
import { DetailContext } from "../../context/detail.context";
import styles from "./detail.module.css";

export const DetailPage = () => {
  const params = useParams();
  const { product, loading, fetchProduct } = useContext(DetailContext);

  useEffect(() => {
    fetchProduct(params.id);
  }, [params.id]);

  if (loading || !product) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

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

import React, { useState } from "react";

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        fetchProductsByCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

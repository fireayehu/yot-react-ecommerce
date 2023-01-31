import React, { useState } from "react";

export const DetailContext = React.createContext();

export const DetailProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchProduct = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <DetailContext.Provider
      value={{
        product,
        loading,
        fetchProduct,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

import React, { useState } from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

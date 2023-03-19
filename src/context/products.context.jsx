import { createContext, useEffect, useState } from "react";
import PRODUCTS_DATA from "../data/products-data.json";

const productsContext = createContext({
  products: null,
  setProducts: () => null,
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(PRODUCTS_DATA);
  }, []);
  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };

import { createContext, useEffect, useState } from "react";
import PRODUCTS_DATA from "../data/products-data.js";
import { getCollectionandDocument } from "../util/models/products.js";

const productsContext = createContext({
  products: {},
  setProducts: () => null,
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  // useEffect(() => {
  //   setProducts(PRODUCTS_DATA);
  // }, []);
  useEffect(() => {
    const getCatrgoriedData = async () => {
      const data = await getCollectionandDocument();
      setProducts(data);
      return data;
    };
    getCatrgoriedData();
  }, []);

  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };

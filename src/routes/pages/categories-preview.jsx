import React, { useContext } from "react";

import { productsContext } from "../../context/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { products } = useContext(productsContext);

  return (
    <>
      {Object.keys(products).map((title) => {
        const items = products[title];
        return <CategoryPreview key={title} title={title} products={items} />;
      })}
    </>
  );
};

export default CategoriesPreview;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product_card/product-card.component";
import { productsContext } from "../../context/products.context";
import "./category.styles.scss";

const Category = () => {
  const { products } = useContext(productsContext);
  const { category } = useParams();
  const [items, setItems] = useState(products[category]);
  useEffect(() => {
    setItems(products[category]);
  }, [products, category]);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {items &&
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;

import React, { useContext } from "react";
import ProductCard from "../../components/product_card/product-card.component";
import { productsContext } from "../../context/products.context";
import "./shop.scss";
const Shop = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

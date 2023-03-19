import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addCartItems } = useContext(CartContext);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="invert" onClick={() => addCartItems(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;

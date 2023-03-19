import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { id, name, price, quantity, imageUrl } = cartItem;
  const { deleteCartItems, addCartItems, decrementCartquantity } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementCartquantity(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={() => addCartItems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteCartItems(id)}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckOutItem;

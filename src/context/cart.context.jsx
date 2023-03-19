import { createContext, useState, useEffect } from "react";

const addToCart = (cartItems, product) => {
  const productExists = cartItems.filter((item) => item.id === product.id);

  if (productExists.length !== 0) {
    const items = cartItems.map((item) =>
      product.id === item.id
        ? { ...item, quantity: (item.quantity += 1) }
        : item
    );
    return items;
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addCartItems: (product) => null,
  totalItems: 0,
});

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let totalQuantity = cartItems.reduce(
      (pre, { quantity }) => pre + quantity,
      0
    );
    setTotalItems(totalQuantity);
  }, [cartItems]);
  const addCartItems = (product) => {
    setCartItems(addToCart(cartItems, product));
  };
  const value = { cartItems, setCartItems, addCartItems, totalItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export { CartContext, CartContextProvider };

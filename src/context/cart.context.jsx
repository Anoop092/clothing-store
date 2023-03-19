import { createContext, useState, useEffect } from "react";
const decremenentCartHandler = (cartItems, id) => {
  const cartNeddedtoRemove = cartItems.find((item) => item.id === id);
  if (cartNeddedtoRemove.quantity < 1) {
    return cartItems.filter((item) => item.id !== id);
  }

  const items = cartItems.map((item) =>
    item.id == id ? { ...item, quantity: --item.quantity } : item
  );
  return items;
};
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
const delteCarthandler = (cartItems, id) => {
  const items = cartItems.filter((item) => item.id !== id);
  return items;
};

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addCartItems: (product) => null,
  totalItems: 0,
  totalAmmount: 0,
  decrementCartquantity: () => null,
  deleteCartItems: () => null,
});

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let totalQuantity = cartItems.reduce(
      (pre, { quantity }) => pre + quantity,
      0
    );
    let totalAmmount = cartItems.reduce(
      (pre, { quantity, price }) => pre + quantity * price,
      0
    );
    setTotalItems(totalQuantity);
    setTotalAmount(totalAmmount);
  }, [cartItems]);
  const addCartItems = (product) => {
    setCartItems(addToCart(cartItems, product));
  };
  const decrementCartquantity = (id) => {
    setCartItems(decremenentCartHandler(cartItems, id));
  };
  function deleteCartItems(id) {
    setCartItems(delteCarthandler(cartItems, id));
  }
  const value = {
    cartItems,
    setCartItems,
    addCartItems,
    totalItems,
    decrementCartquantity,
    deleteCartItems,
    totalAmmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export { CartContext, CartContextProvider };

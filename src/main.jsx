import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.context";
import { CartContextProvider } from "./context/cart.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

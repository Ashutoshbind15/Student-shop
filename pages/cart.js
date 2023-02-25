import React from "react";
import ProductList from "../components/Product/ProductList";
import { useCart } from "../hooks/queries";

const Cart = () => {
  const { cart } = useCart();
  return <ProductList products={cart} remove={true}></ProductList>;
};

export default Cart;

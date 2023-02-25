import React from "react";
import ProductList from "../components/Product/ProductList";
import { useCart } from "../hooks/queries";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  const mapper = cart.map((el) => ({
    amount: el.amount,
    ...el.product,
  }));
  return <ProductList products={mapper} remove={true}></ProductList>;
};

export default Cart;

import React from "react";
import CartList from "../components/Product/CartList";
import { useCart } from "../hooks/queries";

const Cart = () => {
  const { cart } = useCart();

  const mapper = cart?.map((el) => ({
    amount: el.amount,
    ...el.product,
  }));
  return <CartList products={mapper} remove={true}></CartList>;
};

export default Cart;

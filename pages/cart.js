import React, { useMemo } from "react";
import CartList from "../components/Product/CartList";
import { useCart } from "../hooks/queries";

const Cart = () => {
  const { cart } = useCart();

  const cartValue = useMemo(() => {
    let amt = 0;
    for (let el of cart) {
      console.log(el);
      amt += el.amount * el.product.price;
    }

    return amt;
  }, [cart]);

  const mapper = cart?.map((el) => ({
    amount: el.amount,
    ...el.product,
  }));

  return (
    <>
      <h1 className="text-center my-4 font-bold text-pink-700 text-3xl ">
        Cart items
      </h1>
      <CartList products={mapper} remove={true}></CartList>
      <h1 className="text-center my-4 font-bold text-pink-700 text-3xl">
        Cost: {cartValue}
      </h1>
    </>
  );
};

export default Cart;

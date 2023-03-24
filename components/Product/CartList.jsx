import React from "react";
import CartItem from "./CartItem";

const CartList = ({ products, remove }) => {
  return (
    <div className="flex flex-wrap text-black">
      {products?.map((product) => (
        <CartItem
          key={product._id}
          desc={product.description}
          price={product.price}
          title={product.title}
          urls={product.urls}
          id={product._id}
          remove={remove}
          amount={product.amount}
        />
      ))}
    </div>
  );
};

export default CartList;

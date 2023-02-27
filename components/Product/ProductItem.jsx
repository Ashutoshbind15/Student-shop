import Link from "next/link";
import React from "react";
import { useCartMutations } from "../../hooks/mutations";
import { useCart } from "../../hooks/queries";
import Card from "../Layout/Card";
import Button from "../UI/Button";

const ProductItem = ({ title, price, desc, urls, id, remove = false }) => {
  const { cart } = useCart();
  const { postCartMutation, editCartMutation, deleteCartMutation } =
    useCartMutations();

  let isPart = cart?.filter((el) => el.product._id === id).length;

  const addToCartHandler = () => {
    postCartMutation.mutate({
      productId: id,
    });
    console.log(cart);
  };

  const removeHandler = () => {
    deleteCartMutation.mutate({
      productId: id,
    });
  };

  return (
    <Card className="text-center py-12 px-4 w-1/2 my-8">
      <p className="my-2 font-semibold font-mono text-xl">{title}</p>
      <p className="my-2 font-semibold font-mono">{price}</p>
      <p className="my-2 font-semibold font-mono">{desc}</p>
      {!isPart ? (
        <Button
          className="my-4 bg-blue-700 text-white z-20"
          onClick={addToCartHandler}
        >
          Add to cart!
        </Button>
      ) : remove ? null : (
        <Button className="my-4 bg-blue-700 text-white z-20">
          <Link href="/cart">Go to Cart</Link>
        </Button>
      )}

      {remove && (
        <Button
          className="my-4 bg-blue-700 text-white z-20"
          onClick={removeHandler}
        >
          Remove
        </Button>
      )}
    </Card>
  );
};

export default ProductItem;

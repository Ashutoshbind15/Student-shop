import React from "react";
import { useCartMutations } from "../../hooks/mutations";
import { useCart } from "../../hooks/queries";
import Card from "../Layout/Card";
import Button from "../UI/Button";

const CartItem = ({ title, price, desc, urls, id, remove = false, amount }) => {
  const { cart } = useCart();
  const { editCartMutation, deleteCartMutation } = useCartMutations();

  let isPart = cart?.filter((el) => el.product._id === id).length;

  const removeHandler = () => {
    deleteCartMutation.mutate({
      productId: id,
    });
  };

  const editHandler = (iden) => {
    if (iden == 1) {
      editCartMutation.mutate({
        productId: id,
        amount: amount + 1,
      });
    }
    if (iden == 0) {
      editCartMutation.mutate({
        productId: id,
        amount: amount - 1,
      });
    }
  };

  return (
    <Card className="text-center py-12 px-4 w-1/2 my-8">
      <p className="my-2 font-semibold font-mono text-xl">{title}</p>
      <p className="my-2 font-semibold font-mono">{price}</p>
      <p className="my-2 font-semibold font-mono">{desc}</p>
      <p className="my-2 font-semibold font-mono">{amount}</p>

      <div>
        <Button
          className="text-red-700 font-bold bg-red-400 mr-2"
          onClick={() => editHandler(1)}
        >
          +
        </Button>
        {amount > 1 && (
          <Button
            className="bg-blue-300 text-blue-700 font-bold"
            onClick={() => editHandler(0)}
          >
            -
          </Button>
        )}
      </div>

      <Button
        className="my-4 bg-blue-700 text-white z-20"
        onClick={removeHandler}
      >
        Remove
      </Button>
    </Card>
  );
};

export default CartItem;

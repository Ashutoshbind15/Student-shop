import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCart, editCart, editProfile, postCart } from "../utils/api";

export const useUserMutations = () => {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return {
    editMutation,
  };
};

export const useCartMutations = () => {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: editCart,

    onMutate: async (newItem) => {
      const { productId, amount } = newItem;
      await queryClient.cancelQueries(["cart"]);
      const prevData = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old) => {
        let idx = 0;

        for (let el of old) {
          if (el.product._id === productId) break;
          idx++;
        }

        const newArr = structuredClone(old);
        newArr[idx].amount = amount;
        console.log(newArr[idx]);
        console.log("hi", old, newArr);

        return newArr;
      });

      return { prevData };
    },

    onError: (err, newItem, ctx) => {
      queryClient.setQueryData(["cart"], ctx.prevData);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const postMutation = useMutation({
    mutationFn: postCart,

    onMutate: async (newItem) => {
      await queryClient.cancelQueries(["cart"]);
      const prevData = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old) => [
        ...old,
        { product: newItem.productId, amount: 1 },
      ]);

      return { prevData };
    },

    onError: (err, newItem, ctx) => {
      queryClient.setQueryData(["cart"], ctx.prevData);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCart,

    onMutate: async (newItem) => {
      await queryClient.cancelQueries(["cart"]);
      const prevData = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old) => {
        return old.filter((el) => el.product !== newItem.productId);
      });

      return { prevData };
    },

    onError: (err, newItem, ctx) => {
      queryClient.setQueryData(["cart"], ctx.prevData);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return {
    editCartMutation: editMutation,
    postCartMutation: postMutation,
    deleteCartMutation: deleteMutation,
  };
};

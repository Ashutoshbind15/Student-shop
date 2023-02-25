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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const postMutation = useMutation({
    mutationFn: postCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return {
    editCartMutation: editMutation,
    postCartMutation: postMutation,
    deleteCartMutation: deleteMutation,
  };
};

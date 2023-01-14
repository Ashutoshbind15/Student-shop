import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "../utils/api";

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

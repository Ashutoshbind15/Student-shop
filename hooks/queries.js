import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getCart, getProfile } from "../utils/api";

export const useUser = () => {
  const { data: session } = useSession();

  const {
    data: profile,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
    enabled: session ? true : false,
  });

  return {
    profile: profile,
    err: error,
    isLoading,
    isError,
  };
};

export const useCart = () => {
  const { data: session } = useSession();

  const {
    data: cart,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: session ? true : false,
  });

  return {
    cart,
    isError,
    isLoading,
    error,
  };
};

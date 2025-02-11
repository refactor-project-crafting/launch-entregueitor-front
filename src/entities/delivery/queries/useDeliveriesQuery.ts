import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../client/axios";
import { Delivery } from "../types";

export const useDeliveriesQuery = () => {
  return useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<{
        deliveries: Delivery[];
      }>("/deliveries");

      return data.deliveries;
    },
    staleTime: 5000,
  });
};

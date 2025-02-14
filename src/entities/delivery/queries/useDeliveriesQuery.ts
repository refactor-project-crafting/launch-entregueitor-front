import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Delivery } from "../types";

export const useDeliveriesQuery = (challenge: number) => {
  return useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{
        deliveries: Delivery[];
      }>(`/deliveries/${challenge}`);

      return data.deliveries;
    },
    staleTime: 5000,
  });
};

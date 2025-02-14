import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { DeliveryDto } from "../dto/types";
import { convertDeliveryDtoToDelivery } from "../dto/mapper";
import { Id } from "../../../types";

export const useDeliveriesQuery = (challenge: number, exerciseId: Id) => {
  return useQuery({
    queryKey: ["deliveries", challenge, exerciseId],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{
        deliveries: DeliveryDto[];
      }>(`/deliveries/${challenge}?exerciseId=${exerciseId}`);

      return data.deliveries.map(convertDeliveryDtoToDelivery);
    },
    staleTime: 5000,
  });
};

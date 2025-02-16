import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { DeliveryDto } from "../dto/types";
import { convertDeliveryDtoToDelivery } from "../dto/mapper";
import { Id } from "../../../types";

export const useDeliveriesQuery = (
  challenge: number,
  exerciseId: Id,
  student: string | null
) => {
  return useQuery({
    queryKey: ["deliveries", challenge, exerciseId, student],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{
        deliveries: DeliveryDto[];
      }>(
        `/deliveries/${challenge}?exerciseId=${exerciseId}${
          student ? "&student=" + student : ""
        }`
      );

      return data.deliveries.map(convertDeliveryDtoToDelivery);
    },
    staleTime: 5000,
  });
};

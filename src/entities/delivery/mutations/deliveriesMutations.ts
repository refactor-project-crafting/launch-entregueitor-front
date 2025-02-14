import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { DeliveryType, FullDeliveryFormData } from "../types";
import { Id } from "../../../types";
import queryClient from "../../../client/queryClient";

export const useAddDeliveryMutation = () => {
  return useMutation({
    mutationFn: async ({
      deliveryData,
      challenge,
      position,
      exerciseId,
      type,
    }: {
      deliveryData: FullDeliveryFormData;
      challenge: number;
      position: number;
      exerciseId: Id;
      type: DeliveryType;
    }) => {
      await fetchWithAuth(
        `/deliveries/${challenge}?type=${type}&position=${position}&exerciseId=${exerciseId}`,
        "post",
        deliveryData
      );
    },
    onSuccess: (_data, { challenge, exerciseId }) => {
      queryClient.invalidateQueries({
        queryKey: ["deliveries", challenge, exerciseId],
      });
    },
  });
};

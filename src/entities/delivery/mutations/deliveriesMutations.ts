import { useMutation } from "@tanstack/react-query";
import { DeliveryData } from "../components/NewDeliveryForm/NewDeliveryForm";
import { fetchWithAuth } from "../../../client/axios";
import { DeliveryType } from "../types";
import { Id } from "../../../types";

export const useAddDeliveryMutation = () => {
  return useMutation({
    mutationFn: async ({
      deliveryData,
      challenge,
      position,
      exerciseId,
      type,
    }: {
      deliveryData: DeliveryData;
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
  });
};

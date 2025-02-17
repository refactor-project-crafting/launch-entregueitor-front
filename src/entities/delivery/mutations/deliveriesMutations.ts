import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { DeliveryType, FullDeliveryFormData } from "../types";
import { Id } from "../../../types";
import queryClient from "../../../client/queryClient";
import useUiContext from "../../../ui/context/useUiContext";

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

export const useAddFileDeliveryMutation = () => {
  const { setFeedbackMessage } = useUiContext();

  return useMutation({
    mutationFn: async ({
      formData,
      challenge,
      position,
      exerciseId,
      type,
    }: {
      formData: FormData;
      challenge: number;
      position: number;
      exerciseId: Id;
      type: DeliveryType;
    }) => {
      await fetchWithAuth(
        `/deliveries/file/${challenge}?type=${type}&position=${position}&exerciseId=${exerciseId}`,
        "post",
        formData
      );
    },
    onSuccess: (_data, { challenge, exerciseId }) => {
      queryClient.invalidateQueries({
        queryKey: ["deliveries", challenge, exerciseId],
      });

      setFeedbackMessage("Entrega enviada 👌");
    },
    onError: () => {
      setFeedbackMessage("Ha ocurrido un error 😔", true);
    },
  });
};

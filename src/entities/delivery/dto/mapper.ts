import { Delivery } from "../types";
import { DeliveryDto } from "./types";

export const convertDeliveryDtoToDelivery = (
  deliveryDto: DeliveryDto
): Delivery => {
  const delivery: Delivery = {
    ...deliveryDto,
    date: new Date(deliveryDto.date),
  };

  return delivery;
};

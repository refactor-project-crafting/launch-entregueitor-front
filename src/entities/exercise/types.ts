import { Id } from "../../types";
import { DeliveryType } from "../delivery/types";

export interface Exercise {
  id: Id;
  name: string;
  challenge: number;
  position: number;
  comments: string;
  type: DeliveryType;
}

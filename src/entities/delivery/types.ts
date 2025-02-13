import { Id } from "../../types";

export type DeliveryType = "text" | "long_text" | "url" | "file";

export interface Delivery {
  id: Id;
  challenge: number;
  name: string;
  type: DeliveryType;
  studentId: Id;
}

import { Id } from "../../types";

export type DeliveryType = "text" | "long_text" | "url" | "file";

export interface Delivery {
  id: Id;
  challenge: number;
  date: Date;
  type: DeliveryType;
  studentId: Id;
  exerciseId: Id;
  exerciseName: string;
}

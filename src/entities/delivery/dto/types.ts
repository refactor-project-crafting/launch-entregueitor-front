import { Id } from "../../../types";
import { DeliveryType } from "../types";

export interface DeliveryDto {
  id: Id;
  challenge: number;
  date: string;
  type: DeliveryType;
  studentId: Id;
  exerciseId: Id;
  exerciseName: string;
}

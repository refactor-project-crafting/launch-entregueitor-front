import { Id } from "../../types";

export type DeliveryType = "text" | "url" | "file";

export interface Delivery {
  id: Id;
  challenge: number;
  date: Date;
  type: DeliveryType;
  studentId: Id;
  exerciseId: Id;
  exerciseName: string;
}

export interface TextDelivery extends Delivery {
  type: "text";
  text: string;
}

export interface UrlDelivery extends Delivery {
  type: "url";
  url: string;
}

export interface FileDelivery extends Delivery {
  type: "file";
  filename: string;
}

export type FullDelivery = TextDelivery | UrlDelivery | FileDelivery;

export type TextDeliveryFormData = Pick<TextDelivery, "text">;
export type UrlDeliveryFormData = Pick<UrlDelivery, "url">;
export type FileDeliveryFormData = Pick<FileDelivery, "filename">;

export type FullDeliveryFormData =
  | TextDeliveryFormData
  | UrlDeliveryFormData
  | FileDeliveryFormData;

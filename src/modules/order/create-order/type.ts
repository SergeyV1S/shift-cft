import type { IPoint } from "@modules/cost-calculation/type";
import type { IUserSession } from "@modules/user/types";

export interface IAddress {
  street: string;
  house: string;
  apartment: string;
  comment: string;
}

export enum EPayer {
  RECEIVER,
  SENDER
}

export interface IOrder {
  senderPoint: IPoint;
  senderAddress: IAddress;
  sender: Omit<IUserSession, "email" | "city">;
  receiverPoint: IPoint;
  receiverAddress: IAddress;
  receiver: Omit<IUserSession, "email" | "city">;
  payer: EPayer;
  status: number;
  cancellable: boolean;
}

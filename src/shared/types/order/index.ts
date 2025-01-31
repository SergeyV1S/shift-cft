import type { IAddress } from "../address";
import type { IPoint } from "../point";
import type { EPayer, IUserContact } from "../user";

export interface ICreateOrder {
  senderPoint: IPoint;
  senderAddress: IAddress;
  sender: IUserContact;
  receiverPoint: IPoint;
  receiverAddress: IAddress;
  receiver: IUserContact;
  payer: EPayer;
}

export interface IOrder extends ICreateOrder {
  status: number;
  cancellable: boolean;
  updated: string;
  _id: string;
  created: string;
}

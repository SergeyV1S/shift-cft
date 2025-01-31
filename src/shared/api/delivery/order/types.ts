import type { EPayer, ICreateOrder, IOption, IOrder } from "@shared/types";

export interface IPostCreateOrderParams extends ICreateOrder {
  option: IOption;
}

export interface IPostCreateOrderResponse extends IDefaultResponse {
  order: IOrder;
  payer: EPayer;
}

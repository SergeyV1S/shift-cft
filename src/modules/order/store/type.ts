import type { IOrder } from "@shared/types";

export interface IOrderState {
  isLoading: boolean;
  error?: string;
  isCancelOrderModal: boolean;
  orders: IOrder[];
  currentOrder?: IOrder;
}

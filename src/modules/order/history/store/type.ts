import type { IOrder } from "@shared/types";

export interface IOrderState {
  isLoading: boolean;
  error?: string;
  orders: IOrder[];
  currentOrder?: IOrder;
}

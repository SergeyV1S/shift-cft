import type { IOrder } from "@shared/types";

export interface IGetOrdersResponse extends IDefaultResponse {
  orders: IOrder[];
}

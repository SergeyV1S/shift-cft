import type { IOrder } from "@shared/types";

export interface IGetCurrentOrderResponse extends IDefaultResponse {
  order: IOrder;
}

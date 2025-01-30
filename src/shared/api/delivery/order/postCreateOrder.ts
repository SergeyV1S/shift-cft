import type { IOrder } from "@modules/order/create-order/type";

import { api } from "@shared/api/instance";

export type TPostCreateOrderParams = Omit<IOrder, "status" | "cancellable">;

export interface IPostCreateOrderResponse extends IDefaultResponse {
  order: IOrder;
}

type TPostCreateOrderConfig = IMutationSettings<TPostCreateOrderParams>;

export const postCreateOrder = async ({ data, config }: TPostCreateOrderConfig) =>
  api.post<IPostCreateOrderResponse>("/delivery/order", data, config).then((res) => res.data);

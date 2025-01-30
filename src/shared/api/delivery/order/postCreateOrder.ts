import type { IOption } from "@modules/cost-calculation/type";
import type { EPayer, IOrder } from "@modules/order/create-order/type";

import { api } from "@shared/api/instance";

export type TPostCreateOrderParams = Omit<
  IOrder,
  "status" | "cancellable" | "updated" | "_id" | "created"
> & {
  option: IOption;
};

export interface IPostCreateOrderResponse extends IDefaultResponse {
  order: IOrder;
  payer: EPayer;
}

type TPostCreateOrderConfig = IMutationSettings<TPostCreateOrderParams>;

export const postCreateOrder = async ({ data, config }: TPostCreateOrderConfig) =>
  api.post<IPostCreateOrderResponse>("/delivery/order", data, config).then((res) => res.data);

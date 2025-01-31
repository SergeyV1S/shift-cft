import { api } from "@shared/api/instance";

export const putCancelOrder = async ({ config, data }: IMutationSettings<{ orderId: string }>) =>
  api.put<IDefaultResponse>("/delivery/orders/cancel", data, config);

import { api } from "@shared/api/instance";

import type { IGetOrdersResponse } from "./types";

export const getOrders = async ({ config }: IQuerySettings) =>
  api.get<IGetOrdersResponse>("/delivery/orders", config);

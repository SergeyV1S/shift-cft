import { api } from "@shared/api/instance";

import type { IGetCurrentOrderResponse } from "./types";

type TGetCurrentOrderSetting = IQuerySettings<{ orderID: string }>;

export const getCurrentOrder = async ({ config, queryParams }: TGetCurrentOrderSetting) =>
  api.get<IGetCurrentOrderResponse>(`/delivery/orders/${queryParams?.orderID}`, config);

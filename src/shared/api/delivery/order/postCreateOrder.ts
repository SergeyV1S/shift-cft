import { api } from "@shared/api/instance";

import type { IPostCreateOrderParams, IPostCreateOrderResponse } from "./types";

type TPostCreateOrderConfig = IMutationSettings<IPostCreateOrderParams>;

export const postCreateOrder = async ({ data, config }: TPostCreateOrderConfig) =>
  api.post<IPostCreateOrderResponse>("/delivery/order", data, config).then((res) => res.data);

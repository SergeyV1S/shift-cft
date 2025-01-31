import { api } from "@shared/api/instance";
import type { IDeliveryCost } from "@shared/types";

import type { ICalculatePriceResponse } from "./types";

type TCalculatePriceConfig = IMutationSettings<IDeliveryCost>;

export const postCalculatePrice = async ({ data, config }: TCalculatePriceConfig) =>
  api.post<ICalculatePriceResponse>("/delivery/calc", data, config).then((res) => res.data);

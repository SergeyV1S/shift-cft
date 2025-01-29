import type { IDeliveryCost, IOption } from "@modules/cost-calculation/type";

import { api } from "@shared/api/instance";

export interface ICalculatePriceResponse extends IDefaultResponse {
  options: IOption[];
}

type TCalculatePriceConfig = IMutationSettings<IDeliveryCost>;

export const postCalculatePrice = async ({ data, config }: TCalculatePriceConfig) =>
  api.post<ICalculatePriceResponse>("/delivery/calc", data, config).then((res) => res.data);

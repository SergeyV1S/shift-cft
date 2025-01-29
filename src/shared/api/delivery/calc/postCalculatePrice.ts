import type {
  IOptions,
  IPackageSize,
  IReceiverPoint,
  ISenderPoint
} from "@modules/cost-calculation/type";

import { api } from "@shared/api/instance";

export interface ICalculatePriceData {
  package: IPackageSize;
  senderPoint: ISenderPoint;
  receiverPoint: IReceiverPoint;
}

export interface ICalculatePriceResponse extends IDefaultResponse {
  oprions: IOptions[];
}

type TCalculatePriceConfig = IMutationSettings<ICalculatePriceData>;

export const postCalculatePrice = async ({ data, config }: TCalculatePriceConfig) =>
  api.post<ICalculatePriceResponse>("/delivery/calc", data, config).then((res) => res.data);

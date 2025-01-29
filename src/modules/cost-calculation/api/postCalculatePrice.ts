import { api } from "@shared/api/instance";

import type { IOptions, IPackageSize, IReceiverPoint, ISenderPoint } from "../type";

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

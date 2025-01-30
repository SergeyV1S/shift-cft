import type { IPoint } from "@modules/cost-calculation/type";

import { api } from "@shared/api/instance";

export interface IGetPointsResponse extends IDefaultResponse {
  points: IPoint[];
}

export const getPoints = async ({ config }: IQuerySettings) =>
  api.get<IGetPointsResponse>("/delivery/points", config).then((res) => res.data);

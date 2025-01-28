import { api } from "@shared/api/instance";

import type { IPoint } from "../type";

export interface IGetPointsResponse extends IDefaultResponse {
  packages: IPoint[];
}

export const getPoints = async ({ config }: IQuerySettings) =>
  api.get<IGetPointsResponse>("/delivery/points", config).then((res) => res.data);

import { api } from "@shared/api/instance";

import type { IGetPointsResponse } from "./types";

export const getPoints = async ({ config }: IQuerySettings) =>
  api.get<IGetPointsResponse>("/delivery/points", config).then((res) => res.data);

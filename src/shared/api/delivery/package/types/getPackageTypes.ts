import { api } from "@shared/api/instance";

import type { IGetPackageTypesResponse } from "./types";

export const getPackageTypes = async ({ config }: IQuerySettings) =>
  api.get<IGetPackageTypesResponse>("/delivery/package/types", config).then((res) => res.data);

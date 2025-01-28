import { api } from "@shared/api/instance";

import type { IPackage } from "../type";

export interface IGetPackageTypesResponse extends IDefaultResponse {
  packages: IPackage[];
}

export const getPackageTypes = async ({ config }: IQuerySettings) =>
  api.get<IGetPackageTypesResponse>("/delivery/package/types", config).then((res) => res.data);

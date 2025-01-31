import type { IPackage } from "@shared/types";

export interface IGetPackageTypesResponse extends IDefaultResponse {
  packages: IPackage[];
}

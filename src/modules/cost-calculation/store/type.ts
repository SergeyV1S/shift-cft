import type { IPackage } from "../type";

export interface ICostCalculationState {
  packagesTypes: IPackage[];
  isLoading: boolean;
  error: string | undefined;
}

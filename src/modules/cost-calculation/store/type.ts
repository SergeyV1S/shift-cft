import type { IPackage, IPoint } from "../type";

export interface ICostCalculationState {
  packagesTypes: IPackage[];
  points: IPoint[];
  isLoading: boolean;
  error: string | undefined;
  activeRequests: number;
  selectedPackageType: Partial<Omit<IPackage, "id">>;
  selectedReceiverPoint: IPoint | undefined;
  isPackageSizeSelectOpen: boolean;
}

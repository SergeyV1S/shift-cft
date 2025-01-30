import type { IOption, IPackage, IPoint } from "../type";

export interface ICostCalculationState {
  packagesTypes: IPackage[];
  points: IPoint[];
  isLoading: boolean;
  error?: string;
  activeRequests: number;
  selectedPackageType: Omit<IPackage, "id">;
  selectedReceiverPoint?: IPoint;
  selectedSenderPoint?: IPoint;
  isPackageSizeSelectOpen: boolean;
  deliveryCost: IOption[];
}

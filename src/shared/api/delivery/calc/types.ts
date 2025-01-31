import type { IOption } from "@shared/types";

export interface ICalculatePriceResponse extends IDefaultResponse {
  options: IOption[];
}

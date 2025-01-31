import type { IPoint } from "@shared/types";

export interface IGetPointsResponse extends IDefaultResponse {
  points: IPoint[];
}

import type { IUserSession } from "@shared/types";

export interface IGetUserSessionResponse extends IDefaultResponse {
  user: IUserSession;
}

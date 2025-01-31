import type { IUserSession } from "@shared/types";

export interface IPostSignInParams {
  phone: string;
  code: number;
}

export interface IPostSignInResponse extends IDefaultResponse {
  user: IUserSession;
  token: string;
}

import type { IUserProfile, IUserSession } from "@shared/types";

export interface IPatchProfileResponse extends IDefaultResponse {
  user: IUserSession;
}

export interface IPatchProfileRequest {
  profile: IUserProfile;
  phone?: string;
}

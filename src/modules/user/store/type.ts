import type { IUserProfile, IUserSession } from "@shared/types";

export interface IUserInitialState {
  userSession?: IUserSession;
  userProfile?: IUserProfile;
  isLoading: boolean;
  error?: string;
}

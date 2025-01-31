import type { IUserProfile, IUserSession } from "@shared/types";

export interface IUserInitialState {
  userSession: IUserSession | null;
  userProfile?: IUserProfile;
  isLoading: boolean;
  error: string | undefined;
}

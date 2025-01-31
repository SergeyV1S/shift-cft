import type { IUserSession } from "@shared/types";

export interface IUserInitialState {
  userSession: IUserSession | null;
  isLoading: boolean;
  error: string | undefined;
}

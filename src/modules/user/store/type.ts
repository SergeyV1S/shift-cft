import type { IUserSession } from "../types";

export interface IUserInitialState {
  userSession: IUserSession | null;
  isLoading: boolean;
  error: string | undefined;
}

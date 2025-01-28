export interface IAuthInitialState {
  phoneNumber: string | null;
  otp: number | null;
  isLoading: boolean;
  retryDelay: number | null;
  isAuth: boolean;
}

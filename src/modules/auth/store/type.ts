export interface IAuthInitialState {
  phoneNumber?: string;
  otp?: number;
  isLoading: boolean;
  retryDelay?: number;
  isAuth: boolean;
}

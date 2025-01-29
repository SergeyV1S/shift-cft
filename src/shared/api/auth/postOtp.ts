import { api } from "@shared/api/instance";

export interface IPostOtpParams {
  phone: string;
}

export interface IPostOtpResponse extends IDefaultResponse {
  retryDelay: number;
}

type TPostOtpConfig = IMutationSettings<IPostOtpParams>;

export const postOtp = async ({ data, config }: TPostOtpConfig) =>
  api.post<IPostOtpResponse>("/auth/otp", data, config).then((res) => res.data);

import { api } from "@shared/api/instance";

import type { IPostOtpParams, IPostOtpResponse } from "./types/postOtp";

type TPostOtpConfig = IMutationSettings<IPostOtpParams>;

export const postOtp = async ({ data, config }: TPostOtpConfig) =>
  api.post<IPostOtpResponse>("/auth/otp", data, config);

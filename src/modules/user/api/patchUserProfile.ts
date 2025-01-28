import type { IUserProfile, IUserSession } from "@modules/user/types";

import { api } from "@shared/api/instance";

interface IPatchProfileResponse extends IDefaultResponse {
  user: IUserSession;
}

interface IPatchProfileRequest {
  profile: Partial<IUserProfile>;
  phone: string;
}

type TPatchProfileConfig = IMutationSettings<Partial<IPatchProfileRequest>>;

export const patchUserProfile = ({ data, config }: TPatchProfileConfig) =>
  api.patch<IPatchProfileResponse>(`/api/users/profile`, data, config);

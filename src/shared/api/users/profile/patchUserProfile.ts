import { api } from "@shared/api/instance";

import type { IPatchProfileRequest, IPatchProfileResponse } from "./type";

type TPatchProfileConfig = IMutationSettings<Partial<IPatchProfileRequest>>;

export const patchUserProfile = ({ data, config }: TPatchProfileConfig) =>
  api.patch<IPatchProfileResponse>(`/api/users/profile`, data, config);

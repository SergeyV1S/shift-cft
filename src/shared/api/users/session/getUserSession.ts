import { api } from "@shared/api/instance";

import type { IGetUserSessionResponse } from "./types";

export const getUserSession = ({ config }: IQuerySettings) =>
  api.get<IGetUserSessionResponse>(`/users/session`, config).then((res) => res.data.user);

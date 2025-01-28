import type { IUserSession } from "@modules/user/types";

import { api } from "@shared/api/instance";

interface IGetUserSessionResponse extends IDefaultResponse {
  profile: IUserSession;
}

export const getUserSession = ({ config }: IQuerySettings) =>
  api.get<IGetUserSessionResponse>(`/api/users/session`, config);

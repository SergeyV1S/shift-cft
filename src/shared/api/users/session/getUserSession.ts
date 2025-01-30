import type { IUserSession } from "@modules/user/types";

import { api } from "@shared/api/instance";

interface IGetUserSessionResponse extends IDefaultResponse {
  user: IUserSession;
}

export const getUserSession = ({ config }: IQuerySettings) =>
  api.get<IGetUserSessionResponse>(`/users/session`, config).then((res) => res.data.user);

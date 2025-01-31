import { api } from "@shared/api/instance";

import type { IPostSignInParams, IPostSignInResponse } from "./types/postSignIn";

type TPostSignInConfig = IMutationSettings<IPostSignInParams>;

export const postSignIn = async ({ data, config }: TPostSignInConfig) =>
  api.post<IPostSignInResponse>("/users/signin", data, config);

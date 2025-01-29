import type { IUserSession } from "@modules/user/types";

import { api } from "@shared/api/instance";
import { toast } from "@shared/lib/hooks/use-toast";

export interface IPostSignInParams {
  phone: string;
  code: number;
}

export interface IPostSignInResponse extends IDefaultResponse {
  user: IUserSession;
  token: string;
}

type TPostSignInConfig = IMutationSettings<IPostSignInParams>;

export const postSignIn = async ({ data, config }: TPostSignInConfig) =>
  api
    .post<IPostSignInResponse>("/users/signin", data, config)
    .then((res) => res.data)
    .catch((error) => {
      if (error?.response?.data?.reason) {
        toast({
          className: "bg-red-800 text-white hover:bg-red-700",
          title: "Ошибка авторизации",
          description: `${error.response.data.reason}`
        });
      } else {
        toast({
          className: "bg-red-800 text-white hover:bg-red-700",
          title: "Не удалось выполнить запрос"
        });
      }

      throw error;
    });

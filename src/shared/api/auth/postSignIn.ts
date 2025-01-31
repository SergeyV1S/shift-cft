import { api } from "@shared/api/instance";
import { toast } from "@shared/lib";

import type { IPostSignInParams, IPostSignInResponse } from "./types/postSignIn";

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

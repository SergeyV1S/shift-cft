import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IPostOtpParams, IPostSignInParams } from "@shared/api";
import { postOtp, postSignIn } from "@shared/api";
import { toast } from "@shared/hooks";

export const postOtpAction = createAsyncThunk("authSlice/postOtp", async (data: IPostOtpParams) =>
  postOtp({ data }).then((res) => res.data)
);

export const postSignInAction = createAsyncThunk(
  "authSlice/postSignIn",
  async (data: IPostSignInParams) =>
    postSignIn({ data })
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
      })
);

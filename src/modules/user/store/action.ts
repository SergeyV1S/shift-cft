import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAuthStatus } from "@modules/auth";

import type { IPatchProfileRequest } from "@shared/api";
import { getUserSession, patchUserProfile } from "@shared/api";
import { toast } from "@shared/hooks";

export const getUserSessionAction = createAsyncThunk(
  "userSlice/getUserSession",
  async (_, { dispatch }) => {
    const user = await getUserSession({}).then((res) => {
      if (res) {
        dispatch(setAuthStatus(true));
      } else {
        dispatch(setAuthStatus(false));
      }
      return res;
    });

    return user;
  }
);

export const patchUserProfileAction = createAsyncThunk(
  "userSlice/patchUserProfile",
  async (data: IPatchProfileRequest) =>
    patchUserProfile({ data: data })
      .then((res) => {
        if (res.data.success) {
          toast({
            className: "bg-green-600 text-white hover:bg-green-700",
            title: "Данные профиля обновлены"
          });
        }
      })
      .catch((error) =>
        toast({
          className: "bg-red-800 text-white hover:bg-red-700",
          title: "Не удалось обновить профиль",
          description: `${error.response.data.reason}`
        })
      )
);

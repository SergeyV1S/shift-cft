import { setAuthStatus } from "@modules/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUserSession } from "@shared/api";

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

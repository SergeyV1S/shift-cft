import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IPostOtpResponse, IPostSignInResponse } from "@shared/api";
import { ACCESS_TOKEN } from "@shared/constants";

import { postOtpAction, postSignInAction } from "./action";
import type { IAuthInitialState } from "./type";

export const initialState: IAuthInitialState = {
  isLoading: false,
  isAuth: false
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(ACCESS_TOKEN);
      state.isAuth = false;
    },
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Получить otp код
      .addCase(postOtpAction.fulfilled, (state, action: PayloadAction<IPostOtpResponse>) => {
        state.isLoading = false;
        state.retryDelay = action.payload.retryDelay;
      })
      .addCase(postOtpAction.pending, (state, action) => {
        state.isLoading = true;
        state.phoneNumber = action.meta.arg.phone;
      })
      .addCase(postOtpAction.rejected, (state) => {
        state.isLoading = false;
      })
      // Авторизация
      .addCase(postSignInAction.fulfilled, (state, action: PayloadAction<IPostSignInResponse>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.phoneNumber = undefined;
        state.retryDelay = undefined;
        state.otp = undefined;
        localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      })
      .addCase(postSignInAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSignInAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    getAuthState: (state) => state
  }
});
export const { logout, setAuthStatus } = authSlice.actions;
export const { getAuthState } = authSlice.selectors;

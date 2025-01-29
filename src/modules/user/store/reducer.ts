import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IUserSession } from "../types";
import { getUserSessionAction } from "./action";
import type { IUserInitialState } from "./type";

export const initialState: IUserInitialState = {
  userSession: null,
  isLoading: false,
  error: undefined
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    removeUserFormState: (state) => {
      state.userSession = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Получить otp код
      .addCase(getUserSessionAction.fulfilled, (state, action: PayloadAction<IUserSession>) => {
        state.isLoading = false;
        state.userSession = action.payload;
      })
      .addCase(getUserSessionAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserSessionAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    getUserState: (state) => state
  }
});

export const { removeUserFormState } = userSlice.actions;

export const { getUserState } = userSlice.selectors;

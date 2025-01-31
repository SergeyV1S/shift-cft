import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IUserSession } from "@shared/types";

import { getUserSessionAction } from "./action";
import type { IUserInitialState } from "./type";

export const initialState: IUserInitialState = {
  isLoading: false
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    removeUserFromState: (state) => {
      state.userSession = undefined;
      state.userProfile = undefined;
    },
    setUser: (state, action: PayloadAction<IUserSession>) => {
      state.userSession = action.payload;
      state.userProfile = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Получить otp код
      .addCase(getUserSessionAction.fulfilled, (state, action: PayloadAction<IUserSession>) => {
        state.isLoading = false;
        state.userSession = action.payload;
        state.userProfile = action.payload;
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

export const { removeUserFromState, setUser } = userSlice.actions;

export const { getUserState } = userSlice.selectors;

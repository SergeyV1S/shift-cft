import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IPostCreateOrderResponse } from "@shared/api";

import { postCreateOrderAction } from "./action";
import type { ICreateOrderState } from "./type";

export const initialState: ICreateOrderState = {
  isLoading: false,
  error: undefined
};

export const createOrderSlice = createSlice({
  name: "createOrderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Создать заказ
      .addCase(postCreateOrderAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        postCreateOrderAction.fulfilled,
        (state, action: PayloadAction<IPostCreateOrderResponse>) => {
          state.isLoading = false;
          console.log(action.payload.order);
        }
      )
      .addCase(postCreateOrderAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
  selectors: {
    getCreateOrderState: (state) => state
  }
});

// export const { setPackageSize, togglePackageSizeSelect, setReceiverPoint, setSenderPoint } =
// createOrderSlice.actions;

// export const { getCostCalculationState, getPackageType, getReceiverPoint, getSenderPoint } =
// createOrderSlice.selectors;

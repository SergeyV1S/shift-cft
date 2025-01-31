import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IOrder } from "@shared/types";

import { getOrdersAction } from "./action";
import type { IOrderState } from "./type";

export const initialState: IOrderState = {
  isLoading: false,
  orders: []
};

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setCurrentOrder: (state, action: PayloadAction<IOrder>) => {
      state.currentOrder = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Получить список заказов заказ
      .addCase(getOrdersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrdersAction.fulfilled, (state, action: PayloadAction<IOrder[]>) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrdersAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
  selectors: {
    getOrderState: (state) => state
  }
});

export const orderSliceActions = orderSlice.actions;

export const orderSliceSelectors = orderSlice.selectors;

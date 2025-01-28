import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IGetPackageTypesResponse, IGetPointsResponse } from "../api";
import { getPackageTypesAction, getPointsAction } from "./action";
import type { ICostCalculationState } from "./type";

export const initialState: ICostCalculationState = {
  packagesTypes: [],
  points: [],
  isLoading: false,
  error: undefined,
  activeRequests: 0
};

export const costCalculationSlice = createSlice({
  name: "costCalculationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получить типы посылок
      .addCase(getPackageTypesAction.pending, (state) => {
        state.activeRequests += 1;
        state.isLoading = true;
      })
      .addCase(
        getPackageTypesAction.fulfilled,
        (state, action: PayloadAction<IGetPackageTypesResponse>) => {
          state.activeRequests -= 1;
          state.packagesTypes = action.payload.packages;
          state.isLoading = state.activeRequests > 0;
        }
      )
      .addCase(getPackageTypesAction.rejected, (state, action) => {
        state.activeRequests -= 1;
        state.error = action.error?.message;
        state.isLoading = state.activeRequests > 0;
      })

      // Получить пункты выдачи
      .addCase(getPointsAction.pending, (state) => {
        state.activeRequests += 1;
        state.isLoading = true;
      })
      .addCase(getPointsAction.fulfilled, (state, action: PayloadAction<IGetPointsResponse>) => {
        state.activeRequests -= 1;
        state.points = action.payload.packages;
        state.isLoading = state.activeRequests > 0;
      })
      .addCase(getPointsAction.rejected, (state, action) => {
        state.activeRequests -= 1;
        state.error = action.error?.message;
        state.isLoading = state.activeRequests > 0;
      });
  },
  selectors: {
    getCostCalculationState: (state) => state
  }
});

export const { getCostCalculationState } = costCalculationSlice.selectors;

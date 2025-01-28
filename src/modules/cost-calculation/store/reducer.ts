import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IGetPackageTypesResponse } from "../api/getPackageTypes";
import { getPackageTypesAction } from "./action";
import type { ICostCalculationState } from "./type";

export const initialState: ICostCalculationState = {
  packagesTypes: [],
  isLoading: false,
  error: undefined
};

export const costCalculationSlice = createSlice({
  name: "costCalculationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получить типы посылок
      .addCase(
        getPackageTypesAction.fulfilled,
        (state, action: PayloadAction<IGetPackageTypesResponse>) => {
          state.isLoading = false;
          state.packagesTypes = action.payload.packages;
        }
      )
      .addCase(getPackageTypesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPackageTypesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
  selectors: {
    getCostCalculationState: (state) => state
  }
});

// export const { moveItem, removeIngredientFromConstructor, clearConstructor } = authSlice.actions;

export const { getCostCalculationState } = costCalculationSlice.selectors;

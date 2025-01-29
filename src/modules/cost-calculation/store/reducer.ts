import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IGetPackageTypesResponse, IGetPointsResponse } from "../api";
import type { IPackage } from "../type";
import { getPackageTypesAction, getPointsAction } from "./action";
import type { ICostCalculationState } from "./type";

export const initialState: ICostCalculationState = {
  packagesTypes: [],
  points: [],
  selectedPackageType: {
    name: "",
    height: "",
    length: "",
    weight: "",
    width: ""
  },
  // selectedReceiverPoint: {
  //   id: "",
  //   latitude: "",
  //   longitude: "",
  //   name: ""
  // },
  selectedReceiverPoint: undefined,
  isLoading: false,
  error: undefined,
  activeRequests: 0,
  isPackageSizeSelectOpen: false
};

export const costCalculationSlice = createSlice({
  name: "costCalculationSlice",
  initialState,
  reducers: {
    setPackageSize: (state, action: PayloadAction<Partial<Omit<IPackage, "id">>>) => {
      if ("name" in action.payload) state.selectedPackageType = action.payload;
      else
        state.selectedPackageType = {
          name: `${action.payload.length}x${action.payload.width}x${action.payload.height}`,
          ...action.payload
        };
    },
    togglePackageSizeSelect: (state) => {
      state.isPackageSizeSelectOpen = !state.isPackageSizeSelectOpen;
    },
    setReceiverPoint: (state, action: PayloadAction<string>) => {
      const receiverPoint = state.points.find((point) => point.id === action.payload);
      state.selectedReceiverPoint = receiverPoint;
    }
  },
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
        state.points = action.payload.points;
        state.isLoading = state.activeRequests > 0;
      })
      .addCase(getPointsAction.rejected, (state, action) => {
        state.activeRequests -= 1;
        state.error = action.error?.message;
        state.isLoading = state.activeRequests > 0;
      });
  },
  selectors: {
    getCostCalculationState: (state) => state,
    getPackageType: (state) => state.selectedPackageType,
    getReceiverPoint: (state) => state.selectedReceiverPoint
  }
});

export const { setPackageSize, togglePackageSizeSelect, setReceiverPoint } =
  costCalculationSlice.actions;

export const { getCostCalculationState, getPackageType, getReceiverPoint } =
  costCalculationSlice.selectors;

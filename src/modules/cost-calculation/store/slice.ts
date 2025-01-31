import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type {
  ICalculatePriceResponse,
  IGetPackageTypesResponse,
  IGetPointsResponse
} from "@shared/api";
import type { IPackage } from "@shared/types";

import { getPackageTypesAction, getPointsAction, postCalculatePriceAction } from "./action";
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
  selectedReceiverPoint: undefined,
  selectedSenderPoint: undefined,
  isLoading: false,
  error: undefined,
  activeRequests: 0,
  isPackageSizeSelectOpen: false,
  deliveryCost: []
};

export const costCalculationSlice = createSlice({
  name: "costCalculationSlice",
  initialState,
  reducers: {
    setPackageSize: (state, action: PayloadAction<Omit<IPackage, "id" | "name">>) => {
      const { height, length, weight, width } = action.payload;
      const approximatePackageSize = state.packagesTypes.find(
        (packageType) =>
          packageType.height === height &&
          packageType.length === length &&
          packageType.weight === weight &&
          packageType.width === width
      );

      if (approximatePackageSize) state.selectedPackageType = approximatePackageSize;
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
    },
    setSenderPoint: (state, action: PayloadAction<string>) => {
      const senderPoint = state.points.find((point) => point.id === action.payload);
      state.selectedSenderPoint = senderPoint;
    },
    resetDeliveryCost: (state) => {
      state.deliveryCost = [];
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
      })
      // Рассчитать стоимость
      .addCase(postCalculatePriceAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        postCalculatePriceAction.fulfilled,
        (state, action: PayloadAction<ICalculatePriceResponse>) => {
          state.deliveryCost = action.payload.options;
          state.isLoading = false;
        }
      )
      .addCase(postCalculatePriceAction.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      });
  },
  selectors: {
    getCostCalculationState: (state) => state,
    getPackageType: (state) => state.selectedPackageType,
    getReceiverPoint: (state) => state.selectedReceiverPoint,
    getSenderPoint: (state) => state.selectedSenderPoint,
    getDeliveryCost: (state) => state.deliveryCost
  }
});

export const costCalculationSliceActions = costCalculationSlice.actions;

export const costCalculationSliceSelectors = costCalculationSlice.selectors;

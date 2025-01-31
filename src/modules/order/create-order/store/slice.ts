import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IPostCreateOrderResponse } from "@shared/api";

import { steps } from "../constants/steps";
import { postCreateOrderAction } from "./action";
import type { ICreateOrderState } from "./type";
import { ESteps } from "./type";

const initialState: ICreateOrderState = {
  currentStep: ESteps.DELIVERY_METHOD,
  isLoading: false,
  createOrder: {}
};

export const createOrderSlice = createSlice({
  name: "createOrderSlice",
  initialState,
  reducers: {
    setOrderField: <K extends keyof ICreateOrderState["createOrder"]>(
      state: ICreateOrderState,
      action: PayloadAction<{ field: K; value: ICreateOrderState["createOrder"][K] }>
    ) => {
      state.createOrder[action.payload.field] = action.payload.value;
    },
    setCurrentStep: (state, action: PayloadAction<ESteps>) => {
      state.currentStep = action.payload;
    },
    decrementStep: (state, action: PayloadAction<ESteps>) => {
      const currentStepIndex = steps.indexOf(action.payload);
      const nextStep = steps[currentStepIndex - 1];
      state.currentStep = nextStep as ESteps;
    },
    resetCreateOrderFields: (state) => {
      state.createOrder = {};
    },
    resetCurrentStep: (state) => {
      state.currentStep = ESteps.DELIVERY_METHOD;
    }
  },
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
          state.createdOrder = action.payload.order;
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

export const createOrderSliceActions = createOrderSlice.actions;

export const createOrderSliceSelectors = createOrderSlice.selectors;

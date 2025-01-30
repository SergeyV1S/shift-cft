import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IPostCreateOrderResponse } from "@shared/api";

import { steps } from "../constants/steps";
import { postCreateOrderAction } from "./action";
import type { ICreateOrderState, TSteps } from "./type";

export const initialState: ICreateOrderState = {
  currentStep: "Способ отправки",
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
    setCurrentStep: (state, action: PayloadAction<TSteps>) => {
      state.currentStep = action.payload;
    },
    incrementStep: (state, action: PayloadAction<TSteps>) => {
      const currentStepIndex = steps.indexOf(action.payload);
      const nextStep = steps[currentStepIndex + 1];
      state.currentStep = nextStep as TSteps;
    },
    decrementStep: (state, action: PayloadAction<TSteps>) => {
      const currentStepIndex = steps.indexOf(action.payload);
      const nextStep = steps[currentStepIndex - 1];
      state.currentStep = nextStep as TSteps;
    },
    resetCreateOrderFields: (state) => {
      state.createOrder = {};
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

export const {
  setOrderField,
  setCurrentStep,
  resetCreateOrderFields,
  decrementStep,
  incrementStep
} = createOrderSlice.actions;

export const { getCreateOrderState } = createOrderSlice.selectors;

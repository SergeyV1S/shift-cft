import { authSlice } from "@modules/auth";
import { costCalculationSlice } from "@modules/cost-calculation/store";
import { combineSlices } from "@reduxjs/toolkit";

export const rootReducer = combineSlices(authSlice, costCalculationSlice);

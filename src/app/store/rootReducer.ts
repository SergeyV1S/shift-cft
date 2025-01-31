import { combineSlices } from "@reduxjs/toolkit";

import { authSlice } from "@modules/auth";
import { costCalculationSlice } from "@modules/cost-calculation";
import { createOrderSlice } from "@modules/order";
import { orderSlice } from "@modules/order/history";
import { userSlice } from "@modules/user";

export const rootReducer = combineSlices(
  authSlice,
  costCalculationSlice,
  userSlice,
  createOrderSlice,
  orderSlice
);

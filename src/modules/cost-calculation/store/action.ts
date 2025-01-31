import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPackageTypes, getPoints, postCalculatePrice } from "@shared/api";
import type { IDeliveryCost } from "@shared/types";

export const getPackageTypesAction = createAsyncThunk(
  "costCalculationSlice/getPackageTypesAction",
  async () => getPackageTypes({})
);

export const getPointsAction = createAsyncThunk("costCalculationSlice/getPointsAction", async () =>
  getPoints({})
);

export const postCalculatePriceAction = createAsyncThunk(
  "costCalculationSlice/postCalculatePriceAction",
  async (data: IDeliveryCost) => postCalculatePrice({ data })
);

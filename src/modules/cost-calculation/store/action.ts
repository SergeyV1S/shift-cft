import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPackageTypes, getPoints, postCalculatePrice } from "@shared/api";
import type { IDeliveryCost } from "@shared/types";

export const getPackageTypesAction = createAsyncThunk(
  "costCalculationSlice/getPackageTypesAction",
  async () => getPackageTypes({}).then((res) => res.data)
);

export const getPointsAction = createAsyncThunk("costCalculationSlice/getPointsAction", async () =>
  getPoints({}).then((res) => res.data)
);

export const postCalculatePriceAction = createAsyncThunk(
  "costCalculationSlice/postCalculatePriceAction",
  async (data: IDeliveryCost) => postCalculatePrice({ data }).then((res) => res.data)
);

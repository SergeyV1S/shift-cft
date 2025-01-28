import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPackageTypes, getPoints } from "../api";

export const getPackageTypesAction = createAsyncThunk(
  "costCalculationSlice/getPackageTypesAction",
  async () => getPackageTypes({})
);

export const getPointsAction = createAsyncThunk("costCalculationSlice/getPointsAction", async () =>
  getPoints({})
);

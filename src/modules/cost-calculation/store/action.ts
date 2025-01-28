import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPackageTypes } from "../api/getPackageTypes";

export const getPackageTypesAction = createAsyncThunk(
  "costCalculationSlice/getPackageTypes",
  async () => getPackageTypes({})
);

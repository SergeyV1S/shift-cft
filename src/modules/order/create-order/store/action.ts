import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TPostCreateOrderParams } from "@shared/api";
import { postCreateOrder } from "@shared/api";

export const postCreateOrderAction = createAsyncThunk(
  "createOrderSlice/postCreateOrderAction",
  async (data: TPostCreateOrderParams) => postCreateOrder({ data })
);

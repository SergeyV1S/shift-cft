import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IPostCreateOrderParams } from "@shared/api";
import { postCreateOrder } from "@shared/api";

export const postCreateOrderAction = createAsyncThunk(
  "createOrderSlice/postCreateOrderAction",
  async (data: IPostCreateOrderParams) => postCreateOrder({ data })
);

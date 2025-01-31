import { createAsyncThunk } from "@reduxjs/toolkit";

import { getOrders } from "@shared/api";

export const getOrdersAction = createAsyncThunk("createOrderSlice/getOrdersAction", async () =>
  getOrders({}).then((res) => res.data.orders)
);

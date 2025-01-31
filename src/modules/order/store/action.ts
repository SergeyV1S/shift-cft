import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrentOrder, getOrders } from "@shared/api";

export const getOrdersAction = createAsyncThunk("createOrderSlice/getOrdersAction", async () =>
  getOrders({}).then((res) => res.data.orders)
);

export const getCurrentOrderAction = createAsyncThunk(
  "createOrderSlice/getCurrentOrderAction",
  async (orderID: string) =>
    getCurrentOrder({ queryParams: { orderID } }).then((res) => res.data.order)
);

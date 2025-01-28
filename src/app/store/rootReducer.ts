import { authSlice } from "@modules/auth";
import { combineSlices } from "@reduxjs/toolkit";

export const rootReducer = combineSlices(authSlice);

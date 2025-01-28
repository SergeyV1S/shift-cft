import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IPostOtpParams, IPostSignInParams } from "../signIn/api";
import { postOtp, postSignIn } from "../signIn/api";

export const postOtpAction = createAsyncThunk("authSlice/postOtp", async (data: IPostOtpParams) =>
  postOtp({ data })
);

export const postSignInAction = createAsyncThunk(
  "authSlice/postSignIn",
  async (data: IPostSignInParams) => postSignIn({ data })
);

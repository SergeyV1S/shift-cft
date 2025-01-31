import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { z } from "zod";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { getAuthState, postOtpAction, postSignInAction } from "@modules/auth";

import { formatePhone } from "@shared/lib";

import type { signInPhoneSchema, signInSchema } from "../lib";

export const useSignIn = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLoading, otp, phoneNumber, retryDelay, isAuth } = useAppSelector(getAuthState);

  const onOtpSubmit = async ({ phone }: z.infer<typeof signInPhoneSchema>) => {
    dispatch(postOtpAction({ phone: formatePhone(phone) }));
  };

  useEffect(() => {
    if (isAuth) navigate(0);
  }, [isAuth]);

  const signIn = async (values: z.infer<typeof signInSchema>) => {
    dispatch(postSignInAction({ phone: values.phone, code: +values.otp }));
  };

  return { onOtpSubmit, signIn, state: { isLoading, otp, phoneNumber, retryDelay } };
};

import { getAuthState, postOtpAction, postSignInAction } from "@modules/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { z } from "zod";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { PATHS } from "@shared/constants";
import { formatePhone } from "@shared/lib/formatePhone";

import type { signInPhoneSchema, signInSchema } from "../lib/signInSchemas";

export const useSignIn = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const dispatch = useAppDispatch();
  const { isLoading, otp, phoneNumber, isAuth, retryDelay } = useAppSelector(getAuthState);

  useEffect(() => {
    if (isAuth) {
      navigate(PATHS.PROFILE);
    }
  }, [isAuth, navigate]);

  const onOtpSubmit = async ({ phone }: z.infer<typeof signInPhoneSchema>) => {
    dispatch(postOtpAction({ phone: formatePhone(phone) }));
  };

  const signIn = async (values: z.infer<typeof signInSchema>) => {
    dispatch(postSignInAction({ phone: values.phone, code: +values.otp }));
  };

  return { onOtpSubmit, signIn, state: { isLoading, otp, phoneNumber, retryDelay } };
};

import { getAuthState, postOtpAction, postSignInAction } from "@modules/auth";
import { useNavigate } from "react-router-dom";
import type { z } from "zod";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { formatePhone } from "@shared/lib/formatePhone";

import type { signInPhoneSchema, signInSchema } from "../lib/signInSchemas";

export const useSignIn = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLoading, otp, phoneNumber, retryDelay } = useAppSelector(getAuthState);

  const onOtpSubmit = async ({ phone }: z.infer<typeof signInPhoneSchema>) => {
    dispatch(postOtpAction({ phone: formatePhone(phone) }));
  };

  const signIn = async (values: z.infer<typeof signInSchema>) => {
    dispatch(postSignInAction({ phone: values.phone, code: +values.otp })).then(() => {
      navigate(0);
    });
  };

  return { onOtpSubmit, signIn, state: { isLoading, otp, phoneNumber, retryDelay } };
};

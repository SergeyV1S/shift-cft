import { zodResolver } from "@hookform/resolvers/zod";
import { getAuthState } from "@modules/auth/store";
import type { TFunctionNonStrict } from "i18next";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { useAppSelector } from "@app/store/hooks";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@shared/ui/input-otp";

import { signInSchema } from "../lib/signInSchemas";

interface ISignInFormProps {
  onSubmit: (values: z.infer<typeof signInSchema>) => Promise<void>;
  isLoading: boolean;
  t: TFunctionNonStrict<"translation", undefined>;
}

export const SignInForm = ({ onSubmit, isLoading, t }: ISignInFormProps) => {
  const { phoneNumber } = useAppSelector(getAuthState);
  const signInPhoneForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phone: phoneNumber as string,
      otp: ""
    }
  });

  return (
    <Form {...signInPhoneForm}>
      <form onSubmit={signInPhoneForm.handleSubmit(onSubmit)} className='grid gap-4'>
        <FormField
          control={signInPhoneForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("general.phone")}</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder={t("general.phone")}
                  format='+# (###) ### ## ##'
                  disabled
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signInPhoneForm.control}
          name='otp'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("sign-in.one-time_password")}</FormLabel>
              <div className='w-full flex items-center justify-center flex-col gap-2'>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          disabled={!signInPhoneForm.formState.dirtyFields.otp || isLoading}
          type='submit'
          className='w-full'
        >
          {t("sign-in.auth_button")}
        </Button>
      </form>
    </Form>
  );
};

import { zodResolver } from "@hookform/resolvers/zod";
import { getAuthState } from "@modules/auth/store";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { useAppSelector } from "@app/store/hooks";

import { Button, Input } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@shared/ui/input-otp";

import { signInSchema } from "../lib/signInSchemas";

interface ISignInFormProps {
  onSubmit: (values: z.infer<typeof signInSchema>) => Promise<void>;
  isLoading: boolean;
}

export const SignInForm = ({ onSubmit, isLoading }: ISignInFormProps) => {
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
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Введите номер телефона'
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
              <FormLabel>Проверочный код</FormLabel>
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
          variant='contained_primary'
          disabled={!signInPhoneForm.formState.dirtyFields.otp || isLoading}
          type='submit'
        >
          Войти
        </Button>
      </form>
    </Form>
  );
};

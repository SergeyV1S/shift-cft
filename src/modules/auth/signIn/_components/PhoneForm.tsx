import { zodResolver } from "@hookform/resolvers/zod";
import type { TFunctionNonStrict } from "i18next";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";

import { signInPhoneSchema } from "../lib/signInSchemas";

interface IPhoneFormProps {
  onSubmit: (values: z.infer<typeof signInPhoneSchema>) => Promise<void>;
  isLoading: boolean;
  t: TFunctionNonStrict<"translation", undefined>;
}

export const PhoneForm = ({ onSubmit, isLoading, t }: IPhoneFormProps) => {
  const signInPhoneForm = useForm<z.infer<typeof signInPhoneSchema>>({
    resolver: zodResolver(signInPhoneSchema),
    defaultValues: {
      phone: ""
    }
  });

  return (
    <Form {...signInPhoneForm}>
      <form onSubmit={signInPhoneForm.handleSubmit(onSubmit)} className='grid gap-5'>
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
                  format='+7 (###) ### ## ##'
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!signInPhoneForm.formState.dirtyFields.phone || isLoading}
          type='submit'
          className='w-full'
        >
          {t("sign-in.send_code")}
        </Button>
      </form>
    </Form>
  );
};

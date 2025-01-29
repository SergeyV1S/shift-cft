import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { Button, Input } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";

import { signInPhoneSchema } from "../lib/signInSchemas";

interface IPhoneFormProps {
  onSubmit: (values: z.infer<typeof signInPhoneSchema>) => Promise<void>;
  isLoading: boolean;
}

export const PhoneForm = ({ onSubmit, isLoading }: IPhoneFormProps) => {
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
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Введите номер телефона'
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
          variant='contained_primary'
          disabled={!signInPhoneForm.formState.dirtyFields.phone || isLoading}
          type='submit'
          className='w-full'
        >
          Получить код подтверждения
        </Button>
      </form>
    </Form>
  );
};

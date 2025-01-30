import { zodResolver } from "@hookform/resolvers/zod";
import type { TReceiverSenderFormSchemas } from "@modules/order/create-order/lib";
import { receiverSenderFormSchema } from "@modules/order/create-order/lib";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import { Input } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";

interface IRecieverSenderFormProps {
  handleSubmit: SubmitHandler<{
    firstname: string;
    middlename: string;
    lastname: string;
    phone: string;
  }>;
}

export const RecieverSenderForm = ({ handleSubmit }: IRecieverSenderFormProps) => {
  const receiverSenderForm = useForm<TReceiverSenderFormSchemas>({
    resolver: zodResolver(receiverSenderFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      middlename: "",
      phone: ""
    }
  });

  return (
    <Form {...receiverSenderForm}>
      <form onSubmit={receiverSenderForm.handleSubmit(handleSubmit)} className='grid gap-5'>
        <FormField
          control={receiverSenderForm.control}
          name='lastname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Введите фаимлию' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={receiverSenderForm.control}
          name='firstname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Введите имя' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={receiverSenderForm.control}
          name='middlename'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Введите отчество' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={receiverSenderForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона*</FormLabel>
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
      </form>
    </Form>
  );
};

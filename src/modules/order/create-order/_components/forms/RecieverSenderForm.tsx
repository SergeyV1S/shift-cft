import { zodResolver } from "@hookform/resolvers/zod";
import type { TReceiverSenderFormSchemas } from "@modules/order/create-order/lib";
import { receiverSenderFormSchema } from "@modules/order/create-order/lib";
import { useCreateOrder } from "@modules/order/create-order/model/useCreateOrder";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import { Button, Input } from "@shared/ui";
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

  const { decrementStepMethod } = useCreateOrder();

  return (
    <Form {...receiverSenderForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          receiverSenderForm.handleSubmit(handleSubmit)(event);
          receiverSenderForm.reset();
        }}
        className='grid gap-5'
      >
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
        <nav className='flex items-center gap-6'>
          <Button
            onClick={decrementStepMethod}
            variant='outline_secondary'
            size='lg'
            className='basis-1/2'
          >
            Назад
          </Button>
          <Button
            type='submit'
            disabled={
              !receiverSenderForm.formState.dirtyFields.firstname ||
              !receiverSenderForm.formState.dirtyFields.lastname ||
              !receiverSenderForm.formState.dirtyFields.middlename ||
              !receiverSenderForm.formState.dirtyFields.phone
            }
            variant='contained_primary'
            size='lg'
            className='basis-1/2'
          >
            Продолжить
          </Button>
        </nav>
      </form>
    </Form>
  );
};

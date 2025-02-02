import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { TAddressFormSchema } from "@modules/order/create-order/lib";
import { addressFormSchema } from "@modules/order/create-order/lib";
import { useCreateOrder } from "@modules/order/create-order/model/useCreateOrder";

import type { IAddress } from "@shared/types";
import { Button, Input, Textarea } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";

interface IAddressFormProps {
  handleSubmit: SubmitHandler<{
    street: string;
    house: string;
    apartment: string;
    comment?: string;
  }>;
  address?: IAddress;
}

export const AddressForm = ({ handleSubmit, address }: IAddressFormProps) => {
  const addressForm = useForm<TAddressFormSchema>({
    resolver: zodResolver(addressFormSchema),
    mode: "onBlur",
    defaultValues: {
      street: address?.street || "",
      house: address?.house || "",
      apartment: address?.apartment || "",
      comment: address?.comment || ""
    },
    reValidateMode: "onChange"
  });

  const { decrementStepMethod } = useCreateOrder();

  return (
    <Form {...addressForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addressForm.handleSubmit(handleSubmit)(event);
          addressForm.reset();
        }}
        className='grid gap-6 w-1/2 max-lg:w-full'
      >
        <FormField
          control={addressForm.control}
          name='street'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Улица*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Улица' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name='house'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер дома*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Дом' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name='apartment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер квартиры*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Квартира' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addressForm.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заметка для курьера</FormLabel>
              <FormControl>
                <Textarea placeholder='Заметка для курьера' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <nav className='flex items-center gap-6 pt-4'>
          <Button
            onClick={decrementStepMethod}
            variant='outline_secondary'
            size='xl'
            className='basis-1/2'
          >
            Назад
          </Button>
          <Button type='submit' variant='contained_primary' size='xl' className='basis-1/2'>
            Продолжить
          </Button>
        </nav>
      </form>
    </Form>
  );
};

import { zodResolver } from "@hookform/resolvers/zod";
import type { TAddressFormSchema } from "@modules/order/create-order/lib";
import { addressFormSchema } from "@modules/order/create-order/lib";
import { useCreateOrder } from "@modules/order/create-order/model/useCreateOrder";
import type { IAddress } from "@modules/order/create-order/type";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button, Input } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";

interface IAddressFormProps {
  handleSubmit: SubmitHandler<{
    street: string;
    house: string;
    apartment: string;
    comment: string;
  }>;
  address?: IAddress;
}

export const AddressForm = ({ handleSubmit, address }: IAddressFormProps) => {
  const addressForm = useForm<TAddressFormSchema>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      street: address?.street || "",
      house: address?.house || "",
      apartment: address?.apartment || "",
      comment: address?.comment || ""
    }
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
        className='grid gap-5 w-1/2'
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
                <Input type='text' placeholder='Заметка для курьера' {...field} />
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
            disabled={!addressForm.formState.isValid}
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

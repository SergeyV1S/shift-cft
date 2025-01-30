import { zodResolver } from "@hookform/resolvers/zod";
import { payerTranslation } from "@modules/order/create-order/constants";
import type { TDeliveryPaymentFormSchema } from "@modules/order/create-order/lib";
import { deliveryPaymentFormSchema } from "@modules/order/create-order/lib";
import { useCreateOrder } from "@modules/order/create-order/model/useCreateOrder";
import { EPayer } from "@modules/order/create-order/type";
import { useForm } from "react-hook-form";

import { Button, Label, RadioInput, Typography } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@shared/ui/form";

export const DeliveryPaymentForm = () => {
  const addressForm = useForm<TDeliveryPaymentFormSchema>({
    resolver: zodResolver(deliveryPaymentFormSchema),
    defaultValues: {
      payer: EPayer.RECEIVER
    }
  });

  const { decrementStepMethod, setPayer } = useCreateOrder();

  return (
    <Form {...addressForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addressForm.handleSubmit(setPayer)(event);
          addressForm.reset();
        }}
        className='grid gap-5 w-1/2'
      >
        <FormField
          control={addressForm.control}
          name='payer'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormControl>
                <div className='flex flex-col gap-2'>
                  <Label className='whitespace-nowrap relative pl-8 items-center h-9 cursor-pointer inline-flex'>
                    <RadioInput
                      value={EPayer.RECEIVER}
                      checked={field.value === EPayer.RECEIVER}
                      onChange={() => field.onChange(EPayer.RECEIVER)}
                    />
                    <Typography variant='paragraph16_medium'>
                      {payerTranslation[EPayer.RECEIVER]}
                    </Typography>
                  </Label>

                  <Label className='whitespace-nowrap relative pl-8 items-center h-9 cursor-pointer inline-flex'>
                    <RadioInput
                      value={EPayer.SENDER}
                      checked={field.value === EPayer.SENDER}
                      onChange={() => field.onChange(EPayer.SENDER)}
                    />
                    <Typography variant='paragraph16_medium'>
                      {payerTranslation[EPayer.SENDER]}
                    </Typography>
                  </Label>
                </div>
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
          <Button type='submit' variant='contained_primary' size='lg' className='basis-1/2'>
            Продолжить
          </Button>
        </nav>
      </form>
    </Form>
  );
};

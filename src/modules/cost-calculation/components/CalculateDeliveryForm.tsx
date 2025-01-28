import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { useAppSelector } from "@app/store/hooks";

import { Button } from "@shared/ui/button";
import { Card, CardContent, CardHeader } from "@shared/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";
import { Spinner } from "@shared/ui/spinner";

import { calculateDeliveryScheme } from "../lib/calculateDeliveryScheme";
import { getCostCalculationState } from "../store";

export const CalculateDeliveryForm = () => {
  const { isLoading } = useAppSelector(getCostCalculationState);

  const signInPhoneForm = useForm<z.infer<typeof calculateDeliveryScheme>>({
    resolver: zodResolver(calculateDeliveryScheme),
    defaultValues: {
      packageSize: {
        height: "",
        length: "",
        weight: "",
        width: ""
      },
      receiverPoint: {
        latitude: "",
        longitude: ""
      },
      senderPoint: {
        latitude: "",
        longitude: ""
      }
    }
  });

  return (
    <Card className='w-[500px] px-16 py-10  min-h-[490px] relative'>
      <CardHeader className='font-bold text-2xl text-center p-0 pb-6'>
        Рассчитать доставку
      </CardHeader>
      <CardContent className='w-[356px] p-0'>
        {isLoading ? (
          <Spinner />
        ) : (
          <Form {...signInPhoneForm}>
            <form className='grid gap-5 w-full'>
              <FormField
                control={signInPhoneForm.control}
                name='packageSize.height'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Город отправки</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='h-10'>
                          <SelectValue placeholder='Выберите город' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='m@example.com'>m@example.com</SelectItem>
                        <SelectItem value='m@google.com'>m@google.com</SelectItem>
                        <SelectItem value='m@support.com'>m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signInPhoneForm.control}
                name='packageSize.length'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Город назначения</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='h-10'>
                          <SelectValue placeholder='Выберите город' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='m@example.com'>m@example.com</SelectItem>
                        <SelectItem value='m@google.com'>m@google.com</SelectItem>
                        <SelectItem value='m@support.com'>m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signInPhoneForm.control}
                name='packageSize.width'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Размер посылки</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='h-10'>
                          <SelectValue placeholder='Укажите размер' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='m@example.com'>m@example.com</SelectItem>
                        <SelectItem value='m@google.com'>m@google.com</SelectItem>
                        <SelectItem value='m@support.com'>m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                //   disabled={!signInPhoneForm.formState.dirtyFields.phone || isLoading}
                type='submit'
                className='w-full'
              >
                Рассчитать
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

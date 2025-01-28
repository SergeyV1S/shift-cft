import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

import { calculateDeliveryScheme } from "../lib/calculateDeliveryScheme";
import { PackageSizeSelectTabs } from "./PackageSizeSelectTabs";

export const CalculateDeliveryForm = () => {
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
    <Form {...signInPhoneForm}>
      <form className='grid w-full gap-6'>
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
                <SelectContent className='z-50'>
                  <PackageSizeSelectTabs />
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button
          //   disabled={!signInPhoneForm.formState.dirtyFields.phone || isLoading}
          type='submit'
          className='w-full'
        >
          Рассчитать
        </Button>
      </form>
    </Form>
  );
};

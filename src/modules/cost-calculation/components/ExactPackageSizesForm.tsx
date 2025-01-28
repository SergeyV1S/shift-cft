import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";

import { exacPackageSizesShema } from "../lib/exacPackageSizesShema";

export const ExactPackageSizesForm = () => {
  const signInPhoneForm = useForm<z.infer<typeof exacPackageSizesShema>>({
    resolver: zodResolver(exacPackageSizesShema),
    defaultValues: {
      height: "",
      length: "",
      weight: "",
      width: ""
    }
  });
  return (
    <Form {...signInPhoneForm}>
      <form className='grid w-full gap-6'>
        <FormField
          control={signInPhoneForm.control}
          name='length'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel>Длинна</FormLabel>
              <FormControl>
                <Input placeholder='см' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signInPhoneForm.control}
          name='width'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel>Ширина</FormLabel>
              <FormControl>
                <Input placeholder='см' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signInPhoneForm.control}
          name='height'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel>Высота</FormLabel>
              <FormControl>
                <Input placeholder='см' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signInPhoneForm.control}
          name='weight'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel>Вес</FormLabel>
              <FormControl>
                <Input placeholder='кг' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          //   disabled={!signInPhoneForm.formState.dirtyFields.phone || isLoading}
          type='submit'
          size='sm'
          className='w-full'
        >
          Сохранить
        </Button>
      </form>
    </Form>
  );
};

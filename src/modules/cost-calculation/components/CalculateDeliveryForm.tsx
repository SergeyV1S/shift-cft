import { useAppSelector } from "@app/store/hooks";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

import { usePackageSizeForm } from "../model/usePackageSizeForm";
import { getPackageType } from "../store";
import { PackageSizeSelectTabs } from "./PackageSizeSelectTabs";

export const CalculateDeliveryForm = () => {
  const selectedPackageType = useAppSelector(getPackageType);
  const { calculateDeliveryForm, isPackageSizeSelectOpen, setIsPackageSizeOpen } =
    usePackageSizeForm();

  return (
    <Form {...calculateDeliveryForm}>
      <form className='grid w-full gap-6'>
        <FormField
          control={calculateDeliveryForm.control}
          name='packageSize'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Размер посылки</FormLabel>
              <Select
                onValueChange={field.onChange}
                onOpenChange={setIsPackageSizeOpen}
                open={isPackageSizeSelectOpen}
              >
                <FormControl>
                  <SelectTrigger className='h-10'>
                    <SelectValue placeholder={selectedPackageType.name || "Укажите размер"} />
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
          control={calculateDeliveryForm.control}
          name='senderPoint'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Город отправки</FormLabel>
              <Select onValueChange={field.onChange}>
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
          control={calculateDeliveryForm.control}
          name='receiverPoint'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Город назначения</FormLabel>
              <Select onValueChange={field.onChange}>
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
          //   disabled={!calculateDeliveryForm.formState.dirtyFields.phone || isLoading}
          type='submit'
          className='w-full'
        >
          Рассчитать
        </Button>
      </form>
    </Form>
  );
};

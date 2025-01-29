import { MailIcon, MapPin, Send } from "lucide-react";

import { useAppSelector } from "@app/store/hooks";

import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

import { usePackageSizeForm } from "../model/usePackageSizeForm";
import { getCostCalculationState, getPackageType, getReceiverPoint } from "../store";
import { PackageSizeSelectTabs } from "./PackageSizeSelectTabs";

export const CalculateDeliveryForm = () => {
  const selectedPackageType = useAppSelector(getPackageType);
  const selectedReceiverPoint = useAppSelector(getReceiverPoint);
  const { points } = useAppSelector(getCostCalculationState);

  const {
    calculateDeliveryForm,
    isPackageSizeSelectOpen,
    selectReceiverPoint,
    setIsPackageSizeOpen
  } = usePackageSizeForm();

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
                    <SelectValue
                      placeholder={
                        <div className='flex items-center gap-2'>
                          <MailIcon className='size-5 opacity-60' />
                          <p>{selectedPackageType.name || "Укажите размер"}</p>
                        </div>
                      }
                    />
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
                    <SelectValue
                      placeholder={
                        <div className='flex items-center gap-2'>
                          <MapPin className='size-5 opacity-60' />
                          <p>{"Выберите город"}</p>
                        </div>
                      }
                    />
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
          render={() => (
            <FormItem>
              <FormLabel>Город назначения</FormLabel>
              <Select onValueChange={selectReceiverPoint}>
                <FormControl>
                  <SelectTrigger className='h-10'>
                    <div className='flex items-center gap-2'>
                      <Send className='size-5 opacity-60' />
                      <p>{selectedReceiverPoint?.name || "Выберите город"}</p>
                    </div>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='max-h-[250px]'>
                  {points.map((point) => (
                    <SelectItem key={point.id} value={point.id}>
                      {point.name}
                    </SelectItem>
                  ))}
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

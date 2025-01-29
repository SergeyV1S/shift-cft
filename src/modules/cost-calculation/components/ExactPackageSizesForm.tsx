import { Button } from "@shared/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Input } from "@shared/ui/input";

import { usePackageSizeForm } from "../model/usePackageSizeForm";

export const ExactPackageSizesForm = () => {
  const { exactPackageSizesForm, setSelectedPackageSize, storedPackageSize } = usePackageSizeForm();
  const values = exactPackageSizesForm.watch();

  const isButtonDisabled =
    !(values.height || storedPackageSize.height) ||
    !(values.length || storedPackageSize.length) ||
    !(values.weight || storedPackageSize.weight) ||
    !(values.width || storedPackageSize.width);

  return (
    <Form {...exactPackageSizesForm}>
      <form
        onSubmit={exactPackageSizesForm.handleSubmit(setSelectedPackageSize)}
        className='grid w-full gap-6'
      >
        <FormField
          control={exactPackageSizesForm.control}
          name='length'
          render={({ field }) => (
            <FormItem className='grid grid-cols-[20%_1fr] items-center gap-4'>
              <FormLabel>Длинна</FormLabel>
              <FormControl>
                <Input placeholder='см' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={exactPackageSizesForm.control}
          name='width'
          render={({ field }) => (
            <FormItem className='grid grid-cols-[20%_1fr] items-center gap-4'>
              <FormLabel>Ширина</FormLabel>
              <FormControl>
                <Input placeholder='см' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={exactPackageSizesForm.control}
          name='height'
          render={({ field }) => (
            <FormItem className='grid grid-cols-[20%_1fr] items-center gap-4'>
              <FormLabel>Высота</FormLabel>
              <FormControl>
                <Input placeholder='см' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={exactPackageSizesForm.control}
          name='weight'
          render={({ field }) => (
            <FormItem className='grid grid-cols-[20%_1fr] items-center gap-4'>
              <FormLabel>Вес</FormLabel>
              <FormControl>
                <Input placeholder='кг' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isButtonDisabled} type='submit' size='sm' className='w-full'>
          Сохранить
        </Button>
      </form>
    </Form>
  );
};

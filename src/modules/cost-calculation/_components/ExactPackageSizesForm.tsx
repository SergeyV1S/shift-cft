import { Button, Input } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@shared/ui/form";

import { usePackageSizeForm } from "../model";

export const ExactPackageSizesForm = () => {
  const { exactPackageSizesForm, setSelectedPackageSize } = usePackageSizeForm();
  const values = exactPackageSizesForm.watch();

  const isButtonDisabled = !values.height || !values.length || !values.weight || !values.width;

  return (
    <Form {...exactPackageSizesForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          exactPackageSizesForm.handleSubmit(setSelectedPackageSize)(event);
        }}
        className='grid w-full gap-6 max-h-[300px] overflow-y-scroll'
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

import { PatternFormat } from "react-number-format";

import type { IGetPointsResponse } from "@shared/api";
import { Button, Input, Spinner, Typography } from "@shared/ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

import { useEditProfile } from "../model";

export const EditProfileForm = ({
  pointsDataResponse
}: {
  pointsDataResponse: IGetPointsResponse;
}) => {
  const { editProfileForm, updateUser, isDisabled, isLoading } = useEditProfile();

  return (
    <Form {...editProfileForm}>
      <form
        onSubmit={editProfileForm.handleSubmit(updateUser)}
        className='md:grid md:grid-cols-2 md:gap-6 max-md:space-y-6'
      >
        <FormField
          control={editProfileForm.control}
          name='lastname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Фамилия' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={editProfileForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона*</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  disabled
                  placeholder='Номер телефона'
                  format='+7 (###) ### ## ##'
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={editProfileForm.control}
          name='firstname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Имя' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={editProfileForm.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={editProfileForm.control}
          name='middlename'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Отчество' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={editProfileForm.control}
          name='city'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Город*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={field.value ? field.value : "Выберите город"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='max-h-60'>
                  {!pointsDataResponse.success ? (
                    <Typography variant='paragraph16_regular'>
                      {pointsDataResponse.reason || "Произошла ошибка при запросе данных"}
                    </Typography>
                  ) : (
                    pointsDataResponse.points.map((point) => (
                      <SelectItem key={point.id} value={point.name}>
                        {point.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={isDisabled}
          variant='contained_primary'
          size='xl'
          className='w-2/3 max-md:w-full relative'
        >
          {isLoading ? <Spinner size={10} /> : "Обновить данные"}
        </Button>
      </form>
    </Form>
  );
};

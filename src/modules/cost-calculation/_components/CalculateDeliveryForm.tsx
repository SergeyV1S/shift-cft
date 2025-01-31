import { MailIcon, MapPin, Send } from "lucide-react";

import { useAppSelector } from "@app/store/hooks";

import { Button, Typography } from "@shared/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

import { usePackageSizeForm } from "../model";
import { costCalculationSliceSelectors } from "../store";
import { PackageSizeSelectTabs } from "./PackageSizeSelectTabs";

export const CalculateDeliveryForm = () => {
  const selectedPackageType = useAppSelector(costCalculationSliceSelectors.getPackageType);
  const selectedReceiverPoint = useAppSelector(costCalculationSliceSelectors.getReceiverPoint);
  const selectedSenderPoint = useAppSelector(costCalculationSliceSelectors.getSenderPoint);
  const { points } = useAppSelector(costCalculationSliceSelectors.getCostCalculationState);

  const packageSizeFormModel = usePackageSizeForm();

  return (
    <form
      onSubmit={packageSizeFormModel.calculateDeliveryFormHandler}
      className='grid w-full gap-6'
    >
      <div className='space-y-2'>
        <Typography variant='paragraph_Smedium'>Размер посылки</Typography>
        <Select
          onOpenChange={packageSizeFormModel.setIsPackageSizeOpen}
          open={packageSizeFormModel.isPackageSizeSelectOpen}
        >
          <SelectTrigger className='h-10'>
            <SelectValue
              placeholder={
                <div className='flex items-center gap-2'>
                  <MailIcon className='size-5 opacity-60' />
                  <Typography variant='paragraph16_regular'>
                    {selectedPackageType.name || "Укажите размер"}
                  </Typography>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className='bg-transparent border-none ring-0 shadow-transparent'>
            <PackageSizeSelectTabs />
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Typography variant='paragraph_Smedium'>Город отправки</Typography>
        <Select onValueChange={packageSizeFormModel.selectSenderPoint}>
          <SelectTrigger className='h-10'>
            <div className='flex items-center gap-2'>
              <MapPin className='size-5 opacity-60' />
              <Typography variant='paragraph16_regular'>
                {selectedSenderPoint?.name || "Выберите город"}
              </Typography>
            </div>
          </SelectTrigger>
          <SelectContent className='max-h-[250px]'>
            {points.map((point) => (
              <SelectItem key={point.id} value={point.id}>
                {point.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className='flex items-center gap-4'>
          {points.slice(0, 3).map((point) => (
            <Button
              key={point.id}
              type='button'
              variant='link_secondary'
              size='xs'
              className='p-0 opacity-70'
              onClick={() => packageSizeFormModel.selectSenderPoint(point.id)}
            >
              {point.name}
            </Button>
          ))}
        </div>
      </div>

      <div className='space-y-2'>
        <Typography variant='paragraph_Smedium'>Город назначения</Typography>
        <Select onValueChange={packageSizeFormModel.selectReceiverPoint}>
          <SelectTrigger className='h-10'>
            <div className='flex items-center gap-2'>
              <Send className='size-5 opacity-60' />
              <Typography variant='paragraph16_regular'>
                {selectedReceiverPoint?.name || "Выберите город"}
              </Typography>
            </div>
          </SelectTrigger>
          <SelectContent className='max-h-[250px]'>
            {points.map((point) => (
              <SelectItem key={point.id} value={point.id}>
                {point.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className='flex items-center gap-4'>
          {points.slice(0, 3).map((point) => (
            <Button
              key={point.id}
              type='button'
              variant='link_secondary'
              size='xs'
              className='p-0 opacity-70'
              onClick={() => packageSizeFormModel.selectReceiverPoint(point.id)}
            >
              {point.name}
            </Button>
          ))}
        </div>
      </div>

      <Button
        disabled={
          !packageSizeFormModel.selectSenderPoint ||
          !selectedReceiverPoint ||
          !selectedPackageType.name
        }
        type='submit'
        className='w-full'
        size='lg'
      >
        Рассчитать
      </Button>
    </form>
  );
};

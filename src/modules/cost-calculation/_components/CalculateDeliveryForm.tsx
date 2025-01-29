import { MailIcon, MapPin, Send } from "lucide-react";

import { useAppSelector } from "@app/store/hooks";

import { Button, Typography } from "@shared/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

import { usePackageSizeForm } from "../model/usePackageSizeForm";
import {
  getCostCalculationState,
  getPackageType,
  getReceiverPoint,
  getSenderPoint
} from "../store";
import { PackageSizeSelectTabs } from "./PackageSizeSelectTabs";

export const CalculateDeliveryForm = () => {
  const selectedPackageType = useAppSelector(getPackageType);
  const selectedReceiverPoint = useAppSelector(getReceiverPoint);
  const selectedSenderPoint = useAppSelector(getSenderPoint);
  const { points } = useAppSelector(getCostCalculationState);

  const {
    isPackageSizeSelectOpen,
    selectReceiverPoint,
    selectSenderPoint,
    setIsPackageSizeOpen,
    calculateDeliveryFormHandler
  } = usePackageSizeForm();

  return (
    <form onSubmit={calculateDeliveryFormHandler} className='grid w-full gap-6'>
      <div className='space-y-2'>
        <Typography variant='paragraph_Smedium'>Размер посылки</Typography>
        <Select onOpenChange={setIsPackageSizeOpen} open={isPackageSizeSelectOpen}>
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
          <SelectContent className='z-50'>
            <PackageSizeSelectTabs />
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Typography variant='paragraph_Smedium'>Город отправки</Typography>
        <Select onValueChange={selectSenderPoint}>
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
              onClick={() => selectSenderPoint(point.id)}
            >
              {point.name}
            </Button>
          ))}
        </div>
      </div>

      <div className='space-y-2'>
        <Typography variant='paragraph_Smedium'>Город назначения</Typography>
        <Select onValueChange={selectReceiverPoint}>
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
              onClick={() => selectReceiverPoint(point.id)}
            >
              {point.name}
            </Button>
          ))}
        </div>
      </div>

      <Button
        disabled={!selectSenderPoint || !selectedReceiverPoint || !selectedPackageType.name}
        type='submit'
        className='w-full'
        size='lg'
      >
        Рассчитать
      </Button>
    </form>
  );
};

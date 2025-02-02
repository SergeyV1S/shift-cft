import { Pencil } from "lucide-react";

import { useAppSelector } from "@app/store/hooks";

import { Button, Spinner, Typography } from "@shared/ui";

import { useCreateOrder } from "../model/useCreateOrder";
import { createOrderSliceSelectors } from "../store";
import { ESteps } from "../store/type";

export const ReviewOrderDetails = () => {
  const { decrementStepMethod, setStep, createOrderRequest } = useCreateOrder();
  const { createOrder, isLoading } = useAppSelector(createOrderSliceSelectors.getCreateOrderState);

  return (
    <div className='w-full space-y-7'>
      <div className='relative rounded-3xl bg-gray-100 py-6 px-10 grid grid-cols-[30%_1fr_30%_5%] items-center text-left max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-4'>
        <Typography variant='paragraph16_medium'>{ESteps.RECEIVER}</Typography>
        <div className='block'>
          <Typography variant='paragraph12_regular'>ФИО</Typography>
          <Typography variant='paragraph16_medium'>{`${createOrder.receiver?.lastname} ${createOrder.receiver?.firstname} ${createOrder.receiver?.middlename}`}</Typography>
        </div>
        <div className='block'>
          <Typography variant='paragraph12_regular'>Телефон</Typography>
          <Typography variant='paragraph16_medium'>{createOrder.receiver?.phone}</Typography>
        </div>
        <Button
          onClick={() => setStep(ESteps.RECEIVER)}
          variant='outline_secondary'
          size='icon'
          className='max-sm:absolute max-sm:right-5 max-sm:top-4'
        >
          <Pencil className='size-5 opacity-50' />
        </Button>
      </div>
      <div className='relative rounded-3xl bg-gray-100 py-6 px-10 grid grid-cols-[30%_1fr_30%_5%] items-center text-left max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-4'>
        <Typography variant='paragraph16_medium'>{ESteps.SENDER}</Typography>
        <div className='block'>
          <Typography variant='paragraph12_regular'>ФИО</Typography>
          <Typography variant='paragraph16_medium'>{`${createOrder.sender?.lastname} ${createOrder.sender?.firstname} ${createOrder.sender?.middlename}`}</Typography>
        </div>
        <div className='block'>
          <Typography variant='paragraph12_regular'>Телефон</Typography>
          <Typography variant='paragraph16_medium'>{createOrder.sender?.phone}</Typography>
        </div>
        <Button
          onClick={() => setStep(ESteps.SENDER)}
          variant='outline_secondary'
          size='icon'
          className='max-sm:absolute max-sm:right-5 max-sm:top-4'
        >
          <Pencil className='size-5 opacity-50' />
        </Button>
      </div>
      <div className='relative rounded-3xl bg-gray-100 py-6 px-10 grid grid-cols-[30%_1fr_30%_5%] items-center text-left max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-4'>
        <Typography variant='paragraph16_medium'>{ESteps.PICKUP_LOCATION}</Typography>
        <div className='block'>
          <Typography variant='paragraph12_regular'>Адрес</Typography>
          <Typography variant='paragraph16_medium'>{`ул. ${createOrder.senderAddress?.street}, д. ${createOrder.senderAddress?.house}`}</Typography>
        </div>
        <div className='block'>
          <Typography variant='paragraph12_regular'>Заметка</Typography>
          <Typography variant='paragraph16_medium'>
            {createOrder.senderAddress?.comment
              ? createOrder.senderAddress.comment
              : "Заметка не указана"}
          </Typography>
        </div>
        <Button
          onClick={() => setStep(ESteps.PICKUP_LOCATION)}
          variant='outline_secondary'
          size='icon'
          className='max-sm:absolute max-sm:right-5 max-sm:top-4'
        >
          <Pencil className='size-5 opacity-50' />
        </Button>
      </div>
      <div className='relative rounded-3xl bg-gray-100 py-6 px-10 grid grid-cols-[30%_1fr_30%_5%] items-center text-left max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-4'>
        <Typography variant='paragraph16_medium'>{ESteps.DELIVERY_LOCATION}</Typography>
        <div className='block'>
          <Typography variant='paragraph12_regular'>Адрес</Typography>
          <Typography variant='paragraph16_medium'>{`ул. ${createOrder.receiverAddress?.street}, д. ${createOrder.receiverAddress?.house}`}</Typography>
        </div>
        <div className='block'>
          <Typography variant='paragraph12_regular'>Заметка</Typography>
          <Typography variant='paragraph16_medium'>
            {createOrder.receiverAddress?.comment
              ? createOrder.receiverAddress.comment
              : "Заметка не указана"}
          </Typography>
        </div>
        <Button
          onClick={() => setStep(ESteps.DELIVERY_LOCATION)}
          variant='outline_secondary'
          size='icon'
          className='max-sm:absolute max-sm:right-5 max-sm:top-4'
        >
          <Pencil className='size-5 opacity-50' />
        </Button>
      </div>
      <div className='text-end space-y-4 max-md:text-left'>
        <Typography variant='title_h3'>{`Итого: ${createOrder.option?.price} ₽`}</Typography>
        <div className='space-y-1'>
          <Typography variant='paragraph16_regular'>{`Тариф: ${createOrder.option?.name}`}</Typography>
          <Typography variant='paragraph16_regular'>{`Срок: ${createOrder.option?.days} рабочий день`}</Typography>
        </div>
      </div>
      <nav className='flex items-center justify-between max-md:gap-4'>
        <Button
          onClick={decrementStepMethod}
          variant='outline_secondary'
          size='xl'
          disabled={isLoading}
          className='w-1/3 relative max-md:w-full'
        >
          {isLoading ? <Spinner size={30} /> : "Назад"}
        </Button>
        <Button
          onClick={() => createOrderRequest()}
          variant='contained_primary'
          size='xl'
          disabled={isLoading}
          className='w-1/3 relative max-md:w-full'
        >
          {isLoading ? <Spinner size={30} /> : "Отправить"}
        </Button>
      </nav>
    </div>
  );
};

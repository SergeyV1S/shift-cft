import { getCreateOrderState } from "@modules/order";
import { Link } from "react-router-dom";

import { useAppSelector } from "@app/store/hooks";

import { cn } from "@shared/lib/utils";
import { Typography, buttonVariants } from "@shared/ui";

const RequestSentPage = () => {
  const { createdOrder, createOrder } = useAppSelector(getCreateOrderState);

  return (
    <div className='container'>
      <div className='mt-12 space-y-6 w-2/3'>
        <div className='flex items-center gap-9'>
          <img className='size-14' src='/svg/Checkmark.svg' alt='check mark' />
          <Typography tag='h1' variant='title_h2'>
            Заявка отправлена
          </Typography>
        </div>
        <Typography variant='paragraph12_regular'>
          Вы можете оплатить ваш заказ в разделе «Профиль»
        </Typography>
        <div className='space-y-6 px-12 py-6 border border-slate-200 rounded-3xl'>
          <div className='space-y-2'>
            <Typography variant='paragraph12_regular'>Номер заказа</Typography>
            <Typography variant='paragraph16_regular'>{createdOrder?._id}</Typography>
          </div>
          <div className='space-y-2'>
            <Typography variant='paragraph12_regular'>Статус</Typography>
            <Typography variant='paragraph16_regular'>{createdOrder?.status}</Typography>
          </div>
          <div className='space-y-2'>
            <Typography variant='paragraph12_regular'>Адрес доставки</Typography>
            <Typography variant='paragraph16_regular'>{`Россия, г. ${createdOrder?.receiverPoint.name}, ул. ${createdOrder?.receiverAddress.street}, д. ${createdOrder?.receiverAddress.house}`}</Typography>
          </div>
          <div className='space-y-2'>
            <Typography variant='paragraph12_regular'>Тип доставки</Typography>
            <Typography variant='paragraph16_regular'>{createOrder.option?.name}</Typography>
          </div>
          <Typography variant='paragraph12_regular'>
            Вся информация была продублирована в SMS
          </Typography>
        </div>
        <nav className='space-x-6'>
          <Link
            to='#'
            className={cn(buttonVariants({ variant: "outline_secondary", size: "xl" }), "w-1/3")}
          >
            Посмотреть статус
          </Link>
          <Link
            to='/'
            className={cn(buttonVariants({ variant: "contained_primary", size: "xl" }), "w-1/3")}
          >
            На главную
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default RequestSentPage;

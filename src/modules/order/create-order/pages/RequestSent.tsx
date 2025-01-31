import { Link } from "react-router-dom";

import { useAppSelector } from "@app/store/hooks";

import { createOrderSliceSelectors } from "@modules/order";
import { OrderDetailsBlock } from "@modules/order/_components/OrderDetailsBlock";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib";
import { Typography, buttonVariants } from "@shared/ui";

const RequestSentPage = () => {
  const { createdOrder, createOrder } = useAppSelector(
    createOrderSliceSelectors.getCreateOrderState
  );

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
        <OrderDetailsBlock
          optionName={createOrder!.option!.name}
          _id={createdOrder!._id}
          status={createdOrder!.status}
          receiverAddress={createdOrder!.receiverAddress}
          receiverPoint={createdOrder!.receiverPoint}
        >
          <Typography variant='paragraph12_regular'>
            Вся информация была продублирована в SMS
          </Typography>
        </OrderDetailsBlock>
        <nav className='space-x-6'>
          <Link
            to={PATHS.ORDER_HISTORY}
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

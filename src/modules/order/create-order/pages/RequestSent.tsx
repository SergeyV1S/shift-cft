import { Link, Navigate } from "react-router-dom";

import { useAppSelector } from "@app/store/hooks";

import { getAuthState } from "@modules/auth";
import { createOrderSliceSelectors } from "@modules/order";
import { OrderDetailsBlock } from "@modules/order/_components/OrderDetailsBlock";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib";
import { Typography, buttonVariants } from "@shared/ui";

const RequestSentPage = () => {
  const { createdOrder, createOrder } = useAppSelector(
    createOrderSliceSelectors.getCreateOrderState
  );
  const { isAuth } = useAppSelector(getAuthState);

  if (!createOrder.option) {
    return isAuth ? <Navigate to={PATHS.ORDER_HISTORY} /> : <Navigate to='/' />;
  }

  return (
    <div className='container'>
      <div className='mt-12 space-y-6 w-2/3 max-lg:w-full'>
        <div className='flex items-center gap-9'>
          <img className='size-14 max-md:size-12' src='/svg/check.svg' alt='check mark' />
          <Typography tag='h1' variant='title_h2'>
            Заявка отправлена
          </Typography>
        </div>
        <Typography variant='paragraph12_regular'>
          Вы можете оплатить ваш заказ в разделе «Профиль»
        </Typography>
        <OrderDetailsBlock
          className='w-full'
          optionName={createOrder.option!.name}
          _id={createdOrder!._id}
          status={createdOrder!.status}
          receiverAddress={createdOrder!.receiverAddress}
          receiverPoint={createdOrder!.receiverPoint}
        >
          <Typography variant='paragraph12_regular'>
            Вся информация была продублирована в SMS
          </Typography>
        </OrderDetailsBlock>
        <nav className='md:space-x-6 max-md:flex max-md:gap-3'>
          <Link
            to={PATHS.ORDER_HISTORY}
            className={cn(
              buttonVariants({ variant: "outline_secondary", size: "xl" }),
              "w-1/3 max-md:w-full"
            )}
          >
            Посмотреть статус
          </Link>
          <Link
            to='/'
            className={cn(
              buttonVariants({ variant: "contained_primary", size: "xl" }),
              "w-1/3 max-md:w-full"
            )}
          >
            На главную
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default RequestSentPage;

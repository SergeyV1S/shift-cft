import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib";
import { Button, Spinner, Typography, buttonVariants } from "@shared/ui";

import { OrderDetailsBlock } from "../_components/OrderDetailsBlock";
import { getCurrentOrderAction, orderSliceSelectors } from "../store";

const OrderDetailsPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { isLoading, currentOrder } = useAppSelector(orderSliceSelectors.getOrderState);

  useEffect(() => {
    if (params.order_id) dispatch(getCurrentOrderAction(params.order_id));
  }, []);

  if (isLoading || !currentOrder) return <Spinner />;

  return (
    <div className='container'>
      <div className='mt-12 space-y-6'>
        <Typography variant='title_h2' tag='h1' className='text-left'>
          Детали заказа
        </Typography>
        {isLoading ? (
          <Spinner />
        ) : (
          <OrderDetailsBlock
            optionName='С сервера не приходит option'
            _id={currentOrder!._id}
            status={currentOrder!.status}
            receiverAddress={currentOrder!.receiverAddress}
            receiverPoint={currentOrder!.receiverPoint}
          >
            <nav className='flex items-center gap-6 w-1/2'>
              <Link
                to={PATHS.ORDER_HISTORY}
                className={cn(
                  buttonVariants({ variant: "outline_secondary", size: "xl" }),
                  "w-1/2"
                )}
              >
                Назад
              </Link>
              <Button variant='contained_primary' size='xl' className='w-1/2'>
                Отменить заказ
              </Button>
            </nav>
          </OrderDetailsBlock>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { Button, Spinner, Typography } from "@shared/ui";

import { OrderDetailsBlock } from "../_components/OrderDetailsBlock";
import { getCurrentOrderAction, orderSliceSelectors } from "../store";

const OrderDetailsPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { isLoading, currentOrder } = useAppSelector(orderSliceSelectors.getOrderState);

  useEffect(() => {
    dispatch(getCurrentOrderAction(params.order_id!));
  }, []);

  if (isLoading) return <Spinner />;

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
            <nav className='space-x-6'>
              <Button
                role='link'
                onClick={() => navigate(-1)}
                variant='contained_primary'
                size='xl'
              >
                Назад
              </Button>
              <Button variant='contained_primary' size='xl'>
                На главную
              </Button>
            </nav>
          </OrderDetailsBlock>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;

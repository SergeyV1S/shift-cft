import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { getOrdersAction, orderSliceSelectors } from "@modules/order";

import { useIsMobile } from "@shared/context";
import { Spinner, Typography } from "@shared/ui";

import { Order } from "./_components/Order";
import { OrdersTable } from "./_components/OrdersTable";

const OrderHistoryPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, orders } = useAppSelector(orderSliceSelectors.getOrderState);
  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(getOrdersAction());
  }, []);

  return (
    <div className='container'>
      <div className='mt-12 space-y-6'>
        <Typography variant='title_h2' tag='h1' className='text-left'>
          История операций
        </Typography>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {!isMobile && <OrdersTable orders={orders} />}
            {isMobile && (
              <div className='divide-y'>
                {orders.map((order) => (
                  <Order key={order._id} {...order} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;

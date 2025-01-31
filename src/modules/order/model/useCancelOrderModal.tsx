import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { putCancelOrder } from "@shared/api";
import { PATHS } from "@shared/constants";
import { toast } from "@shared/lib";

import { orderSliceActions, orderSliceSelectors } from "../store";

export const useCancelOrderModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isCancelOrderModal, currentOrder } = useAppSelector(orderSliceSelectors.getOrderState);

  const closeModal = () => {
    dispatch(orderSliceActions.toggleCancelOrderModal());
  };

  const cancelOrder = async () => {
    await putCancelOrder({ data: { orderId: currentOrder!._id } })
      .then((res) => {
        if (res.data.success) {
          dispatch(orderSliceActions.toggleCancelOrderModal());
          navigate(PATHS.ORDER_HISTORY);
          toast({
            className: "bg-green-600 text-white hover:bg-green-700",
            title: "Заказ успешно отменен!"
          });
        }
      })
      .catch((error) =>
        toast({
          className: "bg-red-800 text-white hover:bg-red-700",
          title: "Не удалось отменить заказ",
          description: `${error.response.data.reason}`
        })
      );
  };

  return { closeModal, isCancelOrderModal, cancelOrder };
};

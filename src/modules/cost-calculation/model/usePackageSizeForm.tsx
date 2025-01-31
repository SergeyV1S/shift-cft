import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { z } from "zod";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { createOrderSliceActions } from "@modules/order";

import { PATHS } from "@shared/constants";

import { exactPackageSizesSchema } from "../lib";
import {
  costCalculationSliceActions,
  costCalculationSliceSelectors,
  postCalculatePriceAction
} from "../store";

export const usePackageSizeForm = () => {
  const { isPackageSizeSelectOpen, selectedSenderPoint, selectedReceiverPoint } = useAppSelector(
    costCalculationSliceSelectors.getCostCalculationState
  );
  const storedPackageSize = useAppSelector(costCalculationSliceSelectors.getPackageType);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const calculateDeliveryFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      postCalculatePriceAction({
        package: storedPackageSize,
        receiverPoint: selectedReceiverPoint!,
        senderPoint: selectedSenderPoint!
      })
    ).then(() => {
      dispatch(createOrderSliceActions.resetCreateOrderFields());
      navigate(PATHS.CREATE_ORDER);
    });
  };

  const exactPackageSizesForm = useForm<z.infer<typeof exactPackageSizesSchema>>({
    resolver: zodResolver(exactPackageSizesSchema),
    defaultValues: {
      height: storedPackageSize.height.toString(),
      length: storedPackageSize.length.toString(),
      weight: storedPackageSize.weight.toString(),
      width: storedPackageSize.width.toString()
    }
  });

  const setSelectedPackageSize = (data: z.infer<typeof exactPackageSizesSchema>) => {
    dispatch(costCalculationSliceActions.setPackageSize(data));
    setIsPackageSizeOpen();
  };

  const setIsPackageSizeOpen = () => {
    dispatch(costCalculationSliceActions.togglePackageSizeSelect());
  };

  const selectReceiverPoint = (pointId: string) => {
    dispatch(costCalculationSliceActions.setReceiverPoint(pointId));
  };

  const selectSenderPoint = (pointId: string) => {
    dispatch(costCalculationSliceActions.setSenderPoint(pointId));
  };

  return {
    storedPackageSize,
    exactPackageSizesForm,
    isPackageSizeSelectOpen,
    selectReceiverPoint,
    calculateDeliveryFormHandler,
    selectSenderPoint,
    setSelectedPackageSize,
    setIsPackageSizeOpen
  };
};

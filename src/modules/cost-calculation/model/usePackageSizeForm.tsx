import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { calculateDeliveryScheme } from "../lib/calculateDeliveryScheme";
import { exactPackageSizesSchema } from "../lib/exactPackageSizesSchema";
import {
  getCostCalculationState,
  getPackageType,
  setPackageSize,
  togglePackageSizeSelect
} from "../store";

export const usePackageSizeForm = () => {
  const { isPackageSizeSelectOpen } = useAppSelector(getCostCalculationState);
  const storedPackageSize = useAppSelector(getPackageType);
  const dispatch = useAppDispatch();

  const calculateDeliveryForm = useForm<z.infer<typeof calculateDeliveryScheme>>({
    resolver: zodResolver(calculateDeliveryScheme),
    defaultValues: {
      packageSize: storedPackageSize,
      receiverPoint: {
        latitude: "",
        longitude: ""
      },
      senderPoint: {
        latitude: "",
        longitude: ""
      }
    }
  });

  const exactPackageSizesForm = useForm<z.infer<typeof exactPackageSizesSchema>>({
    resolver: zodResolver(exactPackageSizesSchema),
    defaultValues: {
      height: storedPackageSize.height,
      length: storedPackageSize.length,
      weight: storedPackageSize.weight,
      width: storedPackageSize.width
    }
  });

  const setSelectedPackageSize = (data: z.infer<typeof exactPackageSizesSchema>) => {
    dispatch(setPackageSize({ ...data }));
    setIsPackageSizeOpen();
  };

  const setIsPackageSizeOpen = () => {
    dispatch(togglePackageSizeSelect());
  };

  return {
    storedPackageSize,
    calculateDeliveryForm,
    exactPackageSizesForm,
    isPackageSizeSelectOpen,
    setSelectedPackageSize,
    setIsPackageSizeOpen
  };
};

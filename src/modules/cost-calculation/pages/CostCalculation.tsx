import { PackageOpen } from "lucide-react";
import { useEffect } from "react";
import QRCode from "react-qr-code";

import { useAppDispatch, useAppSelector } from "@app/store/hooks";

import { createOrderSliceActions } from "@modules/order";

import { Spinner, Typography } from "@shared/ui";
import { Card, CardContent, CardHeader } from "@shared/ui/card";

import { CalculateDeliveryForm } from "../_components/CalculateDeliveryForm";
import {
  costCalculationSliceActions,
  costCalculationSliceSelectors,
  getPackageTypesAction,
  getPointsAction
} from "../store";

const CostCalculationPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(
    costCalculationSliceSelectors.getCostCalculationState
  );

  useEffect(() => {
    dispatch(getPackageTypesAction());
    dispatch(getPointsAction());
    dispatch(costCalculationSliceActions.resetDeliveryCost());
    dispatch(createOrderSliceActions.resetCurrentStep());
  }, []);

  return (
    <div className='md:m-auto container'>
      <div className='flex items-center gap-20 justify-center max-lg:flex-col max-lg:gap-10 max-md:mt-10'>
        <div className='max-w-[600px] w-full xl:w-1/3 space-y-10'>
          <div className='space-y-4 max-md:space-y-7 max-md:text-center'>
            <Typography variant='title_h1' tag='h1'>
              Мы доставим ваш заказ
            </Typography>
            <Typography variant='paragraph24_regular'>
              Отправляйте посылки в приложении Шифт Delivery
            </Typography>
          </div>
          <div className='bg-white flex items-center max-md:flex-col gap-5 max-md:text-center rounded-2xl p-5 shadow-md'>
            <div className='flex items-center gap-5'>
              <PackageOpen className='size-16 text-blue-500' />
              <QRCode value='https://igniz.ru/' size={64} fgColor='#3b82f6' level='M' />
            </div>
            <Typography variant='paragraph16_regular' className='opacity-80'>
              Наведите камеру телефона на QR-код
            </Typography>
          </div>
        </div>
        <Card className='max-w-[600px] w-full max-md:w-full px-16 max-sm:px-5 space-y-6 py-10 min-h-[490px] relative'>
          <CardHeader>
            <Typography variant='title_h2' tag='h2'>
              Рассчитать доставку
            </Typography>
          </CardHeader>
          <CardContent className='w-full p-0'>
            {isLoading ? (
              <Spinner />
            ) : error ? (
              <p className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>{error}</p>
            ) : (
              <CalculateDeliveryForm />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CostCalculationPage;

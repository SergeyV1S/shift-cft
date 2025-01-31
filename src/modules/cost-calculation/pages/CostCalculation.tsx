import { PackageOpen } from "lucide-react";
import { useEffect } from "react";
import QRCode from "react-qr-code";

import { useAppDispatch } from "@app/store/hooks";

import { createOrderSliceActions } from "@modules/order";

import { Typography } from "@shared/ui";

import { CalculateDeliveryCard } from "../_components/CalculateDeliveryCard";
import { costCalculationSliceActions, getPackageTypesAction, getPointsAction } from "../store";

const CostCalculationPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPackageTypesAction());
    dispatch(getPointsAction());
    dispatch(costCalculationSliceActions.resetDeliveryCost());
    dispatch(createOrderSliceActions.resetCurrentStep());
  }, []);

  return (
    <div className='m-auto container'>
      <div className='flex items-center gap-20 justify-center max-lg:flex-col max-lg:mt-20'>
        <div className='max-w-[500px] w-full max-lg:w-[60%] space-y-10'>
          <div className='space-y-4'>
            <Typography variant='title_h1' tag='h1' className='max-lg:text-center'>
              Мы доставим ваш заказ
            </Typography>
            <Typography variant='paragraph24_regular' className='max-lg:text-center'>
              Отправляйте посылки в приложении Шифт Delivery
            </Typography>
          </div>
          <div className='bg-white flex items-center gap-5 rounded-2xl p-5 shadow-md'>
            <PackageOpen className='size-16 text-blue-500' />
            <QRCode value='https://igniz.ru/' size={64} fgColor='#3b82f6' level='M' />
            <Typography variant='paragraph16_regular' className='opacity-80'>
              Наведите камеру телефона на QR-код
            </Typography>
          </div>
        </div>
        <CalculateDeliveryCard />
      </div>
    </div>
  );
};

export default CostCalculationPage;

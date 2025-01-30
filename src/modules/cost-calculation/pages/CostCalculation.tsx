import { resetcurrentStep } from "@modules/order";
import { PackageOpen } from "lucide-react";
import { useEffect } from "react";

import { useAppDispatch } from "@app/store/hooks";

import { Typography } from "@shared/ui";

import { CalculateDeliveryCard } from "../_components/CalculateDeliveryCard";
import { getPackageTypesAction, getPointsAction, resetDeliveryCost } from "../store";

const CostCalculationPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPackageTypesAction());
    dispatch(getPointsAction());
    dispatch(resetDeliveryCost());
    dispatch(resetcurrentStep());
  }, []);

  return (
    <div className='m-auto container'>
      <div className='flex items-center gap-20 justify-center max-lg:flex-col max-lg:mt-20'>
        <div className='w-[380px] max-lg:w-[60%] space-y-10'>
          <div className='space-y-4'>
            <Typography variant='title_h1' tag='h1' className='max-lg:text-center'>
              Мы доставим ваш заказ
            </Typography>
            <Typography variant='paragraph24_regular' className='max-lg:text-center'>
              Отправляйте посылки в приложении Шифт Delivery
            </Typography>
          </div>
          <div className='bg-white flex items-center gap-5 rounded-2xl p-4 shadow-md'>
            <PackageOpen className='size-24 text-blue-500' />
            <img className='size-16' src='/img/QR_Code.png' alt='QR Code' />
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

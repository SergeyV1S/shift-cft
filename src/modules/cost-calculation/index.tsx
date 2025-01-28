import { PackageOpen } from "lucide-react";
import { useEffect } from "react";

import { useAppDispatch } from "@app/store/hooks";

import { CalculateDeliveryCard } from "./components/CalculateDeliveryCard";
import { getPackageTypesAction, getPointsAction } from "./store";

const CostCalculationPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPackageTypesAction());
    dispatch(getPointsAction());
  }, []);

  return (
    <div className='m-auto container'>
      <div className='flex items-center gap-20 justify-center'>
        <div className='w-[380px] space-y-10'>
          <div className='space-y-4'>
            <h1 className='font-bold text-5xl'>Мы доставим ваш заказ</h1>
            <p className='text-2xl opacity-50 font-light'>
              Отправляйте посылки в приложении Шифт Delivery
            </p>
          </div>
          <div className='bg-white flex items-center gap-4 rounded-2xl p-4 shadow-lg'>
            <PackageOpen className='size-16 text-blue-500' />
            <img className='size-16' src='/img/QR_Code.png' alt='QR Code' />
            <p className='opacity-80'>Наведите камеру телефона на QR-код</p>
          </div>
        </div>
        <CalculateDeliveryCard />
      </div>
    </div>
  );
};

export default CostCalculationPage;

import { PlaneIcon } from "lucide-react";

import { Typography } from "@shared/ui";

interface IDeliveryVariantProps {
  name: string;
  price: number;
  days: number;
}

export const DeliveryVariant = ({ name, price, days }: IDeliveryVariantProps) => (
  <div className='rounded-3xl border border-slate-300'>
    <div className='flex gap-4 p-4'>
      <div className='relative rounded-full bg-slate-200 size-14'>
        <PlaneIcon className='absolute size-7 stroke-slate-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
      <div className='space-y-2'>
        <Typography variant='paragraph16_regular' tag='h2'>
          {name}
        </Typography>
        <Typography variant='title_h3' tag='h3'>
          {price} ₽
        </Typography>
        <Typography variant='paragraph16_regular' className='pt-4'>
          {days} рабочий день
        </Typography>
      </div>
    </div>
  </div>
);

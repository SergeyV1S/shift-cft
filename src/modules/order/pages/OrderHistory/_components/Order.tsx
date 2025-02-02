import { Link } from "react-router-dom";

import { translateStatus } from "@shared/constants";
import { cn } from "@shared/lib";
import type { IOrder } from "@shared/types";
import { Typography, typographyVariants } from "@shared/ui";

export const Order = (props: IOrder) => (
  <div className='py-6 space-y-6 first:pt-0'>
    <div className='space-y-1'>
      <Typography variant='paragraph12_regular'>Статус заказа</Typography>
      <div className='flex items-center gap-2'>
        <div
          style={{ background: translateStatus[props.status].color }}
          className='rounded-full size-2'
        />
        <Typography variant='paragraph16_medium'>{translateStatus[props.status].value}</Typography>
      </div>
    </div>
    <div className='space-y-1'>
      <Typography variant='paragraph12_regular'>Номер заказа</Typography>
      <Typography variant='paragraph16_medium'>{props._id}</Typography>
    </div>
    <div className='space-y-1'>
      <Typography variant='paragraph12_regular'>Адрес доставки</Typography>
      <Typography variant='paragraph16_medium'>
        {`Россия, г. ${props.receiverPoint.name}, ул. ${props.receiverAddress.street}, д. ${props.receiverAddress.house}`}
      </Typography>
    </div>
    <Link
      to={props._id}
      className={cn(
        typographyVariants({ variant: "paragraph12_regular" }),
        "opacity-60 border-b border-b-black block w-fit"
      )}
    >
      Подробнее
    </Link>
  </div>
);

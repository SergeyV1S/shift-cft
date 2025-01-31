import { cn } from "@shared/lib";
import type { IAddress, IPoint } from "@shared/types";
import { Typography } from "@shared/ui";

interface IOrderDetailsBlockProps extends React.ComponentProps<"div"> {
  _id: string;
  status: number;
  receiverAddress: IAddress;
  receiverPoint: IPoint;
  optionName: string;
  children: React.ReactNode;
}

export const OrderDetailsBlock = ({
  _id,
  status,
  receiverAddress,
  receiverPoint,
  optionName,
  children,
  className,
  ...props
}: IOrderDetailsBlockProps) => (
  <div
    className={cn("space-y-6 px-12 py-6 border border-slate-200 rounded-3xl", className)}
    {...props}
  >
    <div className='space-y-2'>
      <Typography variant='paragraph12_regular'>Номер заказа</Typography>
      <Typography variant='paragraph16_regular'>{_id}</Typography>
    </div>
    <div className='space-y-2'>
      <Typography variant='paragraph12_regular'>Статус</Typography>
      <Typography variant='paragraph16_regular'>{status}</Typography>
    </div>
    <div className='space-y-2'>
      <Typography variant='paragraph12_regular'>Адрес доставки</Typography>
      <Typography variant='paragraph16_regular'>{`Россия, г. ${receiverPoint.name}, ул. ${receiverAddress.street}, д. ${receiverAddress.house}`}</Typography>
    </div>
    <div className='space-y-2'>
      <Typography variant='paragraph12_regular'>Тип доставки</Typography>
      <Typography variant='paragraph16_regular'>{optionName}</Typography>
    </div>
    <Typography variant='paragraph12_regular'>Вся информация была продублирована в SMS</Typography>
    {children}
  </div>
);

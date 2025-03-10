import { Link } from "react-router-dom";

import { translateStatus } from "@shared/constants";
import { cn } from "@shared/lib";
import type { IOrder } from "@shared/types";
import { Typography, typographyVariants } from "@shared/ui";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@shared/ui/table";

export const OrdersTable = ({ orders }: { orders: IOrder[] }) => (
  <Table>
    <TableCaption>
      {orders.length === 0 ? "Список заказов пуст" : "Список ваших заказов за последнее время"}
    </TableCaption>
    <TableHeader>
      <TableRow className='hover:bg-none py-2'>
        <TableHead className='w-[250px] py-6'>Номер заказа</TableHead>
        <TableHead>Адрес доставки</TableHead>
        <TableHead>Статус заказа</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      {orders.map((order) => (
        <TableRow key={order._id}>
          <TableCell className='font-medium py-6'>{order._id}</TableCell>
          <TableCell>{`Россия, г. ${order.receiverPoint.name}, ул. ${order.receiverAddress.street}, д. ${order.receiverAddress.house}`}</TableCell>
          <TableCell className='flex items-center gap-2 pt-5'>
            <div
              style={{ background: translateStatus[order.status].color }}
              className='rounded-full size-2'
            />
            <Typography variant='paragraph16_regular'>
              {translateStatus[order.status].value}
            </Typography>
          </TableCell>
          <TableCell className='text-right pr-5'>
            <Link
              to={order._id}
              className={cn(
                typographyVariants({ variant: "paragraph12_regular" }),
                "opacity-60 border-b border-b-black py-[1px]"
              )}
            >
              Подробнее
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

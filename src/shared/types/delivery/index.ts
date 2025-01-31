import type { IPackageSize } from "../package";
import type { IReceiverPoint, ISenderPoint } from "../point";

export interface IDeliveryCost {
  package: IPackageSize;
  senderPoint: ISenderPoint;
  receiverPoint: IReceiverPoint;
}

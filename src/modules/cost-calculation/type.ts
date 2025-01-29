/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface IPackageSize {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface IPackage extends IPackageSize {
  id: string;
  name: string;
}

export interface ISenderPoint {
  latitude: string;
  longitude: string;
}

export interface IReceiverPoint extends ISenderPoint {}

export interface IPoint extends ISenderPoint {
  id: string;
  name: string;
}

export interface IOptions {
  id: string;
  price: number;
  days: number;
  name: string;
  type: string;
}

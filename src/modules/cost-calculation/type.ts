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

export interface IReceiverPoint {
  latitude: string;
  longitude: string;
}

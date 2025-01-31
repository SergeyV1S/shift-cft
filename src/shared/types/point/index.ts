export interface ISenderPoint {
  latitude: string;
  longitude: string;
}

export interface IReceiverPoint extends ISenderPoint {}

export interface IPoint extends ISenderPoint {
  id: string;
  name: string;
}

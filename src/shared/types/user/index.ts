interface IDefaultUser {
  firstname: string;
  middlename: string;
  lastname: string;
}

export interface IUserSession extends IUserProfile {
  phone: string;
}

export interface IUserProfile extends IDefaultUser {
  email: string;
  city: string;
}

export enum EPayer {
  RECEIVER = "RECEIVER",
  SENDER = "SENDER"
}

export interface IUserContact extends IDefaultUser {
  phone: string;
}

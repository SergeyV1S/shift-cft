export interface IUserSession extends IUserProfile {
  phone: string;
}

export interface IUserProfile {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

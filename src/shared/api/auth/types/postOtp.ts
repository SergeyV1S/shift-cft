export interface IPostOtpParams {
  phone: string;
}

export interface IPostOtpResponse extends IDefaultResponse {
  retryDelay: number;
}

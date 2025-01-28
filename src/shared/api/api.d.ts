/* eslint-disable @typescript-eslint/consistent-type-imports */
type UidConfig = RequestConfig<UidParams>;

interface IMutationSettings<Data = unknown> {
  config?: import("axios").AxiosRequestConfig;
  data: Data;
}

interface IQuerySettings<QueryParams = string> {
  config?: import("axios").AxiosRequestConfig;
  queryParams?: QueryParams;
}

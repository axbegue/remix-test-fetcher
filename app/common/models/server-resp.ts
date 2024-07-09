import { PaginationType } from './pagination-type';
import { ServerError } from './server-error';

export type ServerResp<T> = {
  data?: T;
  pagination?: PaginationType;
  error?: ServerError;
};

import { PageMetadata } from './page-metadata';
import { ServerError } from './server-error';

export type ApiResp<T> = {
  data?: T;
  meta?: PageMetadata;
  error?: ServerError;
};

declare type allKeys<T> = T extends unknown ? keyof T : never;
export type ValidatorError<T> = { [P in allKeys<T>]?: string };

export declare type ValidateSuccess<T> = {
  success: true;
  data: T;
  error?: never;
};

export declare type ValidateError<T> = {
  success: false;
  error: ValidatorError<T>;
  data?: never;
};

export declare type ValidationResp<T> = ValidateSuccess<T> | ValidateError<T>;

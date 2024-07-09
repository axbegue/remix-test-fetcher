// import { ErrorBase } from './error-base';

// export class CsrfTokenError extends ErrorBase<CsrfTokenErrorName> {
//   static InvalidToken = new ErrorBase({
//     name: CsrfTokenErrorName.InvalidCsrfToken,
//     message: 'Session expired. Please refresh the page and try again.',
//   });
// }

export enum CsrfTokenErrorName {
  InvalidCsrfToken = 'InvalidCsrfToken',
}

export const CsrfTokenError = {
  InvalidToken: {
    name: CsrfTokenErrorName.InvalidCsrfToken,
    message: 'Session expired. Please refresh the page and try again.',
  },
};

export type CsrfTokenErrorType = (typeof CsrfTokenError)[keyof typeof CsrfTokenError];

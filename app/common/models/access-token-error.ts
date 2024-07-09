import { ErrorBase } from './error-base';

type TokenErrorName = 'invalidAccessToken' | 'noRefreshToken' | 'invalidRefreshToken';

export class TokenError extends ErrorBase<TokenErrorName> {}

import { randomBytes, createHmac, timingSafeEqual } from 'crypto';
import { Buffer } from 'buffer';
import { Either } from '~/common/utils/either';
import { CsrfTokenError, CsrfTokenErrorType } from '~/common/models/csrf-token-error';

// CSRF: Cross Site Request Forgery
// Synchronizer token pattern: 4 steps
// 1.- Generate a unique token per session per form.
// 2.- Transmit that with the form.
// 3.- Send it back.
// 4. Securely validate the token server side.

export const getCSRFSeed = (): string => {
  // let seed = session.get('csrfSeed');
  // if (seed) {
  //   return seed;
  // }
  const seed = randomBytes(32).toString('base64');
  // session.set('csrfSeed', seed);
  return seed;
};

export const createCSRFToken = (identifier: string, seed: string): string => {
  const { CSRF_HASH_SALT, CSRF_PRIVATE_KEY } = process.env;
  // const seed = getCSRFSeed(session);
  const secret = `${CSRF_HASH_SALT}${CSRF_PRIVATE_KEY}${seed}`;
  const hmac = createHmac('sha256', secret);
  const data = hmac.update(identifier);
  return data.digest('hex');
};

export const validateCSRFToken = (token: string, identifier: string, seed: string): Either<CsrfTokenErrorType, boolean> => {
  const expected = createCSRFToken(identifier, seed);
  try {
    if (!timingSafeEqual(Buffer.from(expected), Buffer.from(token))) {
      return Either.left(CsrfTokenError.InvalidToken);
    } else {
      return Either.right(true);
    }
  } catch (error) {
    return Either.left(CsrfTokenError.InvalidToken);
  }
};

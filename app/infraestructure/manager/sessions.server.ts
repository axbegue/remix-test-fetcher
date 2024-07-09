import { Session, SessionStorage, createCookieSessionStorage, isSession } from '@remix-run/node';
import { AuthUser, ResponseStub } from '~/common/models';
import { isTokenValid } from '../services/jwt-token.server';

type SessionData = {
  authUser?: AuthUser;
  csrfSeed?: string;
  theme?: string;
};

type SessionFlashData = {
  error: string;
};

const SESSION_NAME = '__session';

export type AppSession = Session<SessionData, SessionFlashData>;
export type AppSessionStorage = SessionStorage<SessionData, SessionFlashData>;

export const sessionStorage = createCookieSessionStorage<SessionData, SessionFlashData>({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: SESSION_NAME,

    // all of these are optional
    // domain: "remix.run",
    // Expires can also be set (although maxAge overrides it when used in combination).
    // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
    //
    // expires: new Date(Date.now() + 60_000),
    httpOnly: true,
    maxAge: 604_800, // one week
    path: '/',
    sameSite: 'strict',
    secrets: ['s3cret1'], // TODO: Parametrizar el secret en .env
    // secure: true,
  },
});

export const getSession = async (request: Request) => {
  return await sessionStorage.getSession(request.headers.get('Cookie'));
};

export const sessionHeader = async (session: AppSession) => {
  return {
    'Set-Cookie': await sessionStorage.commitSession(session),
  };
};

export const setSession = async (response: ResponseStub, session: AppSession) => {
  response.headers.append('Set-Cookie', await sessionStorage.commitSession(session));
  return response;
};

export const isAuthenticated = async (
  request: Request | AppSession,
  response: ResponseStub,
  options: { successRedirect?: string; failureRedirect?: string } = {},
) => {
  const session = isSession(request) ? request : await getSession(request);
  const authUser: AuthUser | null = session.get('authUser') ?? null;
  // TODO: Esto es por ahora, hay que usar refresh tokens
  const isValid = isTokenValid(authUser?.tokens.accessToken ?? '');

  if (isValid) {
    if (options.successRedirect) {
      throw redirect(options.successRedirect, response, session);
    } else {
      return authUser;
    }
  }

  if (options.failureRedirect) {
    throw redirect(options.failureRedirect, response, session);
  } else {
    return null;
  }
};

export const redirect = async (url: string, response: ResponseStub, session?: AppSession) => {
  response.status = 302;
  response.headers.set('Location', url);
  if (session) {
    response.headers.set('Set-Cookie', await sessionStorage.commitSession(session));
  }
  return response;
};

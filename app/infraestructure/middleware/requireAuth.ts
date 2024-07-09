import { redirect } from '@remix-run/node';
import { type MiddlewareFunctionArgs } from 'remix-create-express-app/middleware';
import { createContext } from 'remix-create-express-app/context';
import { AuthUser } from '~/common/models';
import { SessionContext } from './session';
import { container } from '../di/inversify.config';
import { AppConfig } from '~/common/interfaces/app-config';

export const AuthContext = createContext<AuthUser>();

export async function requireAuth({ request, context, next }: MiddlewareFunctionArgs) {
  const url = new URL(request.url);
  const session = context.get(SessionContext);
  const authUser = session.get('authUser');
  if (url.pathname.includes('/app/') && !authUser) {
    console.log('No authUser found, redirecting to /login');
    throw redirect(`/login?redirectTo=${encodeURI(url.pathname + url.search)}`);
  }
  // set the user in the context from the cookie
  context.set(AuthContext, authUser);
  authUser && container.get<AppConfig>(AppConfig).setAuthUser(authUser);
  return next();
}

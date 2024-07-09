import { type MiddlewareFunctionArgs } from 'remix-create-express-app/middleware';
import { createContext } from 'remix-create-express-app/context';
import { getCSRFSeed } from '../services/csrf.server';
import { SessionContext } from './session';

export const CsrfContext = createContext<string>();

export async function csrfSeed({ context, next }: MiddlewareFunctionArgs) {
  const session = context.get(SessionContext);
  let csrfSeed = session.get('csrfSeed');
  if (!csrfSeed) {
    csrfSeed = getCSRFSeed();
    session.set('csrfSeed', csrfSeed);
  }
  context.set(CsrfContext, csrfSeed);
  return next();
}

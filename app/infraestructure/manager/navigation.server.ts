import { ResponseStub } from '~/common/models';
import { AppSession, redirect } from './sessions.server';

export const navigateTo = async (url: string, response: ResponseStub, session?: AppSession) => {
  return await redirect(url, response, session);
};

export const navigateToHome = async (response: ResponseStub, session?: AppSession): Promise<ResponseStub> => {
  return await redirect('/', response, session);
};

export const navigateToLogin = async (response: ResponseStub, session?: AppSession): Promise<ResponseStub> => {
  return await redirect('/login', response, session);
};

export const navigateToForgotPassword = async (response: ResponseStub, session?: AppSession): Promise<ResponseStub> => {
  return await redirect('/forgot', response, session);
};

export const navigateToDashboard = async (response: ResponseStub, session?: AppSession): Promise<ResponseStub> => {
  return await redirect('/app', response, session);
};

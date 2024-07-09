import { AuthUser } from '../models';
import { RouteGeneratos } from '../utils/route.generator';

export interface AppConfig {
  getApiUrl(controller: string): RouteGeneratos;
  setAuthUser(authUser: AuthUser): void;
  getAuthUser(): AuthUser | null;
}

export const AppConfig = Symbol('AppConfig');

import { AppConfig } from '~/common/interfaces/app-config';
import { AuthUser } from '~/common/models/auth-user';
import { RouteGeneratos } from '~/common/utils/route.generator';

export class AppConfigImpl implements AppConfig {
  private authUser: AuthUser | null;

  constructor(private readonly apiRoot: string) {
    this.authUser = null;
  }

  getApiUrl(controller: string): RouteGeneratos {
    return new RouteGeneratos(this.apiRoot, controller);
  }
  setAuthUser(authUser: AuthUser): void {
    this.authUser = authUser;
  }
  getAuthUser(): AuthUser | null {
    return this.authUser;
  }
}

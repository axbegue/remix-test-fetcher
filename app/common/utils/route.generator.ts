export class RouteGeneratos {
  constructor(
    private readonly apiRoot: string,
    private readonly controller: string,
  ) {}

  getApiUrl(action?: string): string {
    return `${this.apiRoot}/${this.controller}${action ? `/${action}` : ''}`;
  }
}

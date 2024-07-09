import { RouteGeneratos } from '~/common/utils/route.generator';

export function buildAuthHeader(token: string) {
  return new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });
}

export function buildUrl(baseUrl: RouteGeneratos, path: string, params?: URLSearchParams) {
  const url = new URL(baseUrl.getApiUrl(path));
  if (params) {
    url.search = params.toString();
  }
  return url;
}

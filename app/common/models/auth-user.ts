export type AuthUser = {
  user: {
    id: string;
    name: string;
    email: string;
    lastLoginDate: string;
    createdAt: string;
  };
  account: {
    id: string;
    nombreEmpresa: string;
    nombreComercial: string;
    createdAt: Date;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

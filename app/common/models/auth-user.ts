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

/*
  {
    "accessToken": "...",
    "refreshToken": "...",
    "user": {
        "id": "61a9fe97-2f53-477c-9d2a-f1555f346fed",
        "name": "Antonio Begue",
        "email": "abegue@axbp.com",
        "lastLoginDate": "2024-02-20T00:20:40.726Z",
        "createdAt": "2023-11-23T05:10:37.730Z"
    }
  }
  { Api V2
    "data": {
      "user": {
        "id": "61a9fe97-2f53-477c-9d2a-f1555f346fed",
        "name": "Antonio Begué",
        "email": "abegue@axbp.com",
        "lastLoginDate": "2024-06-25T22:40:43.324Z",
        "createdAt": "2023-11-23T05:10:37.730Z"
      },
      "account": {
        "id": "1ebce801-b760-4b23-8a15-43d6c95ad832",
        "nombreEmpresa": "Pastebe S.A.",
        "nombreComercial": "Café Lúcuma",
        "createdAt": "2023-11-23T05:10:37.730Z"
      },
      "tokens": {
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxIiwic3ViIjoiNjFhOWZlOTctMmY1My00NzdjLTlkMmEtZjE1NTVmMzQ2ZmVkIiwiZmFtIjoiMjcyNDhhZWEtNmZjZS00YTI0LTg3YjgtN2RkZGM1YzZkYjk5IiwianRpIjoiMTU0MTZiYTM5NGZhZGU2OTZiZTdjMDNiYTEzMWI3NWMiLCJzY29wZSI6IntcInRva2VuVHlwZVwiOlwicmVmcmVzaFwifSIsImlhdCI6MTcxOTM1NTI0MywiZXhwIjoxNzE5Nzg3MjQzfQ.ahOd71jX1rXbPI5jp3dSjPxtBrLpzKF_3z0_yc1JOT0",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIxIiwic3ViIjoiNjFhOWZlOTctMmY1My00NzdjLTlkMmEtZjE1NTVmMzQ2ZmVkIiwiZmFtIjoiMjcyNDhhZWEtNmZjZS00YTI0LTg3YjgtN2RkZGM1YzZkYjk5IiwianRpIjoiMTU0MTZiYTM5NGZhZGU2OTZiZTdjMDNiYTEzMWI3NWMiLCJzY29wZSI6IntcInRva2VuVHlwZVwiOlwiYWNjZXNzXCIsXCJhY2NvdW50SWRcIjpcIjFlYmNlODAxLWI3NjAtNGIyMy04YTE1LTQzZDZjOTVhZDgzMlwiLFwicm9sZVwiOjB9IiwiaWF0IjoxNzE5MzU1MjQzLCJleHAiOjE3MTk0NDE2NDN9.V7EoK6MntK4J6CYCR1HN72f5xUIxVG6i57nxvUgV9HM"
      }
    }
  }
*/

import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useRouteError } from '@remix-run/react';
import { unstable_defineLoader as defineLoader, LinksFunction } from '@remix-run/node';
import styles from './styles/styles.css?url';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from './styles/emotion';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

// const session = createSessionMiddleware(sessionStorage);
// export const middleware = serverOnly$([session, csrfSeed]);

export const loader = defineLoader(async () => {
  // const csrfSeed = typeof context.get === 'function' ? context.get(CsrfContext) : '';
  // const csrf = createCSRFToken(process.env.CSRF_FORM_ID!, csrfSeed);
  const csrf = 'createCSRFToken';
  return { csrf };
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { csrf } = useLoaderData<typeof loader>();

  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error) ? error.data : (error as Error).message;
  return (
    <Box sx={{ m: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }} color="red">
        {message ?? 'An error occurred'}
      </Typography>
    </Box>
  );
}

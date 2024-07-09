import { Button } from '@mui/material';
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Button to="/app/contactos" variant="contained" component={Link}>
        Go to test
      </Button>
    </div>
  );
}

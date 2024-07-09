import { Button } from '@mui/material';
import { useFetcher } from '@remix-run/react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TestData({ dataPromise }: { dataPromise: Promise<any> }) {
  const fetcher = useFetcher<{ ok: boolean }>();
  const [state, setState] = useState();

  useEffect(() => {
    console.log('fetcher.state', fetcher.state, fetcher.data);
    if (fetcher.state === 'idle') {
      console.log('');
    }
  }, [fetcher.data, fetcher.state]);

  useEffect(() => {
    const awaitData = async () => {
      const data = await dataPromise;
      setState(data);
    };
    awaitData();
  }, [dataPromise]);

  const handleClick = () => {
    fetcher.submit(
      {
        data: { ok: true },
      },
      { method: 'post' },
    );
  };

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <Button variant="contained" onClick={handleClick}>
        Load Data
      </Button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

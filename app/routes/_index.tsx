import { unstable_defineLoader as defineLoader, unstable_defineAction as defineAction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TestData } from '~/components/TestData';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = defineLoader(async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');

  const data = loadData();
  return { data, filters: { search } };
});

async function loadData() {
  const res = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const data = await res.json();
  return data;
}

export const action = defineAction(async ({ request }) => {
  const formData = await request.formData();
  const formDto = Object.fromEntries(formData);
  await new Promise((resolve) => setTimeout(resolve, 10));
  return { ok: Boolean(formDto.ok) };
});

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return <TestData dataPromise={data} />;
}

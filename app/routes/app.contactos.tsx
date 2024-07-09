import { unstable_defineLoader as defineLoader, unstable_defineAction as defineAction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { TestData } from '~/components/TestData';
import { validateCSRFToken } from '~/infraestructure/services/csrf.server';

export const loader = defineLoader(async ({ request }) => {
  // await new Promise((resolve) => setTimeout(resolve, 500));

  const url = new URL(request.url);
  const search = url.searchParams.get('search');

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const contactosResp = loadData().then((result) => delay(0).then(() => result));
  // const contactosResp = loadData();
  return { contactosResp, filters: { search } };
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
  const formToken = formDto.formToken?.toString() ?? '';

  // Validate CSRF token
  const csrfSeed = 'createCSRFToken';
  const csrfResp = validateCSRFToken(formToken, process.env.CSRF_FORM_ID!, csrfSeed);
  if (csrfResp.isLeft()) {
    const error = csrfResp.unwrapLeft();
    return { error: { message: error.message } };
  }

  return { error: undefined };
});

export default function ContactosRoute() {
  const { contactosResp } = useLoaderData<typeof loader>();
  return <TestData dataPromise={contactosResp} />;
}

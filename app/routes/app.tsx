import { unstable_defineLoader as defineLoader, MetaFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { RecoilRoot } from 'recoil';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { emptyUserAccountNames } from '~/common/models/user-account-names';
import LayoutPage from '~/components/LayoutPage';

export const meta: MetaFunction = () => {
  return [{ title: 'Uvacloud' }, { name: 'description', content: 'Uvacloud App!' }];
};

export const loader = defineLoader(async () => {
  return { userAccountNames: emptyUserAccountNames };
});

export default function AppRoute() {
  const { userAccountNames } = useLoaderData<typeof loader>();

  return (
    <RecoilRoot>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <LayoutPage accountNames={userAccountNames}>
          <Outlet />
        </LayoutPage>
      </LocalizationProvider>
    </RecoilRoot>
  );
}

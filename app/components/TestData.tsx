import { Box, Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Form, useFetcher } from '@remix-run/react';
import { FormEvent, useEffect, useState } from 'react';
import { globals } from '~/styles/emotion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TestData({ dataPromise }: { dataPromise: Promise<any> }) {
  const fetcher = useFetcher<{ ok: boolean }>();
  const [state, setState] = useState();
  const contacto: { [key: string]: unknown } = {
    id: '',
  };

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

  const handleClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetcher.submit(
      {
        data: { ok: true },
      },
      { method: 'post' },
    );
  };

  // If you add a form with a lot of fields, the problem is more likely to occur
  return (
    <>
      <Form method="POST" onSubmit={handleClick}>
        <Box p={globals.size.s500}>
          <Box sx={{ p: 0, paddingTop: '10px' }}>
            <input type="hidden" name="id" defaultValue={String(contacto!.id!)} />
            <Box>
              <TextField
                id="identificacion"
                name="identificacion"
                // required
                label="Identificacion"
                variant="outlined"
                defaultValue={contacto?.identificacion}
                sx={{ gridColumn: 'span 3' }}
              />

              <TextField
                id="nombre"
                name="nombre"
                // required
                label="Nombre"
                variant="outlined"
                defaultValue={contacto?.nombre}
                sx={{ gridColumn: 'span 6' }}
              />
              <TextField
                id="telefono"
                name="telefono"
                label="Teléfono"
                variant="outlined"
                defaultValue={contacto?.telefono}
                sx={{ gridColumn: { xs: 'span 3', sm: 'span 2' } }}
              />
              <TextField
                id="email"
                name="email"
                label="Correo"
                variant="outlined"
                defaultValue={contacto?.email}
                sx={{ gridColumn: { xs: 'span 3', sm: 'span 2' } }}
              />
              <DatePicker
                name="fechaNacimiento"
                label="Fecha nacimiento"
                // id="fechaNacimiento"
                // type="date"
                // variant="outlined"
                // defaultValue={contacto?.fechaNacimiento}
                // error={!!state.error?.fechaNacimiento}
                // helperText={state.error?.fechaNacimiento}
                views={['year', 'month', 'day']}
                sx={{ gridColumn: { xs: 'span 3', sm: 'span 2' } }}
              />
              <TextField
                id="direccion"
                name="direccion"
                label="Dirección"
                variant="outlined"
                defaultValue={contacto?.direccion}
                sx={{ gridColumn: 'span 6' }}
              />
              <TextField
                id="contacto"
                name="contacto"
                label="Contacto"
                variant="outlined"
                defaultValue={contacto?.contacto}
                sx={{ gridColumn: 'span 3' }}
              />
              <TextField id="cargo" name="cargo" label="Cargo" variant="outlined" defaultValue={contacto?.cargo} sx={{ gridColumn: 'span 3' }} />
              <TextField
                id="comentario"
                name="comentario"
                label="Comentario"
                variant="outlined"
                defaultValue={contacto?.comentario}
                sx={{ gridColumn: 'span 6' }}
              />
            </Box>
          </Box>
          <Box sx={{ padding: '1rem 0 0 0' }}>
            <Button color="secondary">Cancelar</Button>
            <Button type="submit">Guardar</Button>
          </Box>
        </Box>
      </Form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );

  // If you simplify the form, the problem is less likely to occur
  // return (
  //   <div className="font-sans p-4">
  //     <h1 className="text-3xl">Welcome to Remix</h1>
  //     <Button variant="contained" onClick={handleClick}>
  //       Load Data
  //     </Button>
  //     <pre>{JSON.stringify(state, null, 2)}</pre>
  //   </div>
  // );
}

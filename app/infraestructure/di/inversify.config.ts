import 'reflect-metadata';
import { Container } from 'inversify';
import { AppConfig } from '~/common/interfaces/app-config';
import { AppConfigImpl } from '../util/app-config-impl';

// export let container: Container;

// export function registerContainer() {
//   // if (!container) {
//   console.log('Registering container');
//   container = new Container();
//   container.load(adminModule);
//   appModules.forEach((module) => container.load(module));
//   // }
// }

const containerManager = (() => {
  let _container: Container;

  // Definir un getter para el contenedor
  return {
    get container() {
      if (!_container) {
        console.log('Registering container [start]');
        _container = new Container();
        _container
          .bind(AppConfig)
          .toDynamicValue(() => new AppConfigImpl(process.env.API_URL!))
          .inSingletonScope();
      }
      console.log('Registered container [end]');
      return _container;
    },
  };
})();

export const { container } = containerManager;

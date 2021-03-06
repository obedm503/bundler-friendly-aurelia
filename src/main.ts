﻿import 'reflect-metadata';
import { WebpackLoader } from 'aurelia-loader-webpack';
import { initialize } from 'aurelia-pal-browser';
import { DOM, PLATFORM } from 'aurelia-pal';
import { Aurelia } from 'aurelia-framework';

import { bootstrap } from './bootstrapper';
import { App } from './app/app';

(async () => {
  const host = DOM.getElementById('root');
  // there shouldn't be a loader, because aurelia should use standard imports
  const loader = new WebpackLoader();
  const aurelia: Aurelia = await bootstrap(host, initialize, loader);

  aurelia.use
    // add plugins here
    .standardConfiguration()
    .developmentLogging();

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app/app'));
})();

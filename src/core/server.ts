import express from 'express';

import { loadLocalEnvIfRequired } from '../utils/env';

import { registerMiddlewares } from '../config/middlewares';
import { registerRoutes } from '../config/routes';
import { registerSettings } from '../config/settings';

export async function initializeServer() {
  await loadLocalEnvIfRequired();

  const app = express();

  await registerMiddlewares(app);
  registerSettings(app);
  registerRoutes(app);

  return app;
}

import type { Application } from 'express';

import { getEnv } from '../config/env';

export function registerSettings(app: Application) {
  const { PORT } = getEnv();

  app.enable('trust proxy');
  app.set('port', Number(PORT) || 8000);
}

import { Application } from 'express';

import { genericRoutes } from '../routes/generic.routes';

export function registerRoutes(app: Application) {
  app.use('/', genericRoutes);
}

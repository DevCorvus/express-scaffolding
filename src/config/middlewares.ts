import { Application } from 'express';
import { getLogger } from '../utils/logger';

import helmet from 'helmet';
import cors from 'cors';

import { getEnv } from '../config/env';
import { redirectOverHttps } from '../middlewares/redirectOverHttps';
import { checkMissingEnv } from '../middlewares/checkMissingEnv';
import {
  rateLimiter,
  limitGlobalRequestsPerIp,
} from '../middlewares/rateLimiter';

export async function registerMiddlewares(app: Application) {
  const log = getLogger();
  const { NODE_ENV } = getEnv();

  app.use(helmet());
  app.use(cors());
  app.use(rateLimiter(limitGlobalRequestsPerIp));

  if (NODE_ENV === 'production') {
    app.use(redirectOverHttps);
    app.use(checkMissingEnv(['PORT']));
  } else {
    try {
      const morgan = (await import('morgan')).default;
      app.use(morgan('dev'));
    } catch (err) {
      log.error(err);
    }
  }
}

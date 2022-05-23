import { Request, Response, NextFunction } from 'express';
import { getLogger } from '../utils/logger';

export function checkMissingEnv(envList: string[]) {
  const log = getLogger();

  return (req: Request, res: Response, next: NextFunction) => {
    const localEnvList = Object.keys(process.env);

    const missingEnvList = envList.filter((mandatoryEnv) => {
      return !localEnvList.includes(mandatoryEnv);
    });

    if (missingEnvList.length > 0) {
      const message = 'Missing environment variables';
      log.error(`${message.concat}: ${missingEnvList}`);

      return res.status(500).send(message);
    }

    next();
  };
}

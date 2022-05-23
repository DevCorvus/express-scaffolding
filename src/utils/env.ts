import { getEnv } from '../config/env';

export const loadLocalEnvIfRequired = async () => {
  const { NODE_ENV } = getEnv();

  if (!NODE_ENV || NODE_ENV === 'development' || NODE_ENV === 'test') {
    const dotenv = (await import('dotenv')).default;
    dotenv.config();
  }
};

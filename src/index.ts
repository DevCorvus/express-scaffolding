import { initializeServer } from './core/server';
import { getLogger } from './utils/logger';

(async () => {
  const log = getLogger();
  const app = await initializeServer();

  app.listen(app.get('port'), () => {
    log.info(`Server running on port ${app.get('port')}`);
  });
})();

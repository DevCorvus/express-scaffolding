import { Router } from 'express';

import * as genericController from '../controllers/generic.controller';

const router = Router();

router.get('/status', genericController.status);

export const genericRoutes = router;

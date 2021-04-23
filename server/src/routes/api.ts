import { Router } from 'express';
import { sessionController } from '@controllers/session';
import { taskTableController } from '@controllers/taskTable';

const router = Router();

router.use('/session', sessionController);
router.use('/taskTable', taskTableController);

export { router as apiController };

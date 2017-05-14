import * as express from 'express';
let router = express['Router']();
import * as TempController from '../controllers/TempController';

router.get('/', TempController.run);
router.get('/test', TempController.test);

export default router;
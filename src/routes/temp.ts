import * as express from 'express';
let router = express['Router']();
import * as TempController from '../controllers/TempController';

router.get('/', TempController.test);

export default router;
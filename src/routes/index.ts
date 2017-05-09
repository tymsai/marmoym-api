import models from '../models';
import * as express from 'express';
import app from "../app";

// import * as TempController from '../controllers/TempController';
import temp from './temp';
import user from './user';

// import auth from './auth';
let router = express['Router']();

// router.get('/', (req, res) => {
//   res.send('Hello World!')
// });
// router.get('/a', TempController.test);

router.use('/temp', temp);
router.use('/users/', user);

export default router;
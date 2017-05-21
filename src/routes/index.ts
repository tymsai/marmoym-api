import models from '../models';
import * as express from 'express';
import app from "../app";

import user from './user';

// import auth from './auth';
let router = express['Router']();

router.use('/users', user);

export default router;
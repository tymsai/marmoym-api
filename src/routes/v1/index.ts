/**
 * Copyright Marmoym 2017
 * 
 * @author Enginehenryed
 * @author Gimochi
 */

import models from '../../models';
import { Router, Request, Response } from 'express';
import termRoute from './termRoute';
import userRoute from './userRoute';

let router: Router = Router();

router.get('/power', (req: Request, res: Response) => {
  res.send("power")
})


router.use('/user', userRoute)

export default router;
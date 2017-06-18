/**
 * ...
 * 
 * @author Enginehenryed
 * @author Gimochi
 */

import models from '../../models';
import { Router, Request, Response } from 'express';
import termRoute from './termRoute';



let router: Router = Router();

router.get('/power', (req: Request, res: Response) => {
  res.send("power")
})

export default router;
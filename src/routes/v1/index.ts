import models from '../../models';
import { Router, Request, Response }from 'express';
import termRoute from './termRoute';

termRoute(router)

// import user from './user';
// import Term from './Term'

let router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("v1")
})

// router.use('/terms', termRoute);

export default router;
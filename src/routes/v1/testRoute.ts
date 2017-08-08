import { Router, Request, Response } from 'express'

import { respond } from '../../services/responseService';

let router: Router = Router();



const a = (req, res, next) => {
  next();
}

const b = () => {
  let a = new Promise((resolve, reject) => {
    resolve(1);
  });

  return a;
}

router.get('/', async (req: Request, res: Response) => {
  console.log(22)

  respond(res, b());
  // b().then((r) => {
  //   console.log(123, r)
  //   res.sendStatus(200);
  // }).catch(err => {
  //   console.log('error');
  // });
  
});

export default router;
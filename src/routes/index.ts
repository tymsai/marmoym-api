import models from '../models';
import * as express from 'express';
import app from "../app";

let router = express['Router']();

router.get('/', (req, res) => {
  res.send('Hello World!')
});

export default router;
import * as express from 'express';
import v1 from './v1'
import {IRouter, NextFunction} from "express-serve-static-core";

// let router: Router = Router();

let router = express.Router();

// router.get("/", ()=> {
//
// })

router.use("/", {})


// router.use(req: Request, res: Response, next: NextFunction) => {
//
// })

const app = express();

// app.use('/v1', v1)

// router.use('/v1', v1);

export default app
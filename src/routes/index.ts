import * as express from 'express';
import v1 from './v1'
import {IRouter, NextFunction, Router} from "express-serve-static-core";

// let router: Router = Router();

let router: Router = express.Router();

console.log(11, express())

router.get("/v1", ()=> {

})



// router.use("/", () => {
//
// })

// router.use(req: Request, res: Response, next: NextFunction) => {
//
// })

// app.use('/v1', v1)

// router.use('/v1', v1);

export default router;
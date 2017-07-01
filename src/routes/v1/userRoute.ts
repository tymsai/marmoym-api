/**
 * Copyright Marmoym 2017
 * 
 */
import { Router, Request, Response } from 'express'
import UserController from '../../controllers/v1/UserController/UserController'

/**
 * Request Mapping: /api/v1/user/
 */
let router: Router = Router();

/**
 * ...
 */
router.post('/login', (req: Request, res: Response) => {
 
  console.log(req.body)

  var result = UserController.getUserInfo(req.body);
  
  if(result != null || result != 'undefined'){
      res.send("login SUCCESS" + result)
  }else{
    res.send("login FAILED")
  }

})

/**
 * ...
 */
router.post('/join', (req: Request, res: Response) => {
  console.log(req.body)
  var result = UserController.registerUser(req.body)  
  if(result){
    res.send("join SUCCESS")
  }else{
    res.send("join FAILED")
  }

})


export default router;
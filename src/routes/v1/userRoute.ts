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
  res.send("hello"+result)
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

/**
 * ...
 */
router.post('/test', (req: Request, res: Response) => {
  console.log(1, req['body']);
  // UserController.getUserInfo("powerwer123123", "dsds")
  res.send('test')
})

/**
 * ...
 */
router.get('/signup', (req: Request, res: Response) => {

  // UserController.registerUser("test", "test");
  res.send('sign up success')
})

export default router;
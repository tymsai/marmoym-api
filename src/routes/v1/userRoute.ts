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

  var result = UserController.getUserToken(req.body);
  
  if(result != null || result != 'undefined'){
      result.then(function(value){
        res.send("login SUCCESS"+value)
      })
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

/**
 * ...
 */
router.get('/check_username_exist:username', (req: Request, res: Response) =>{
  var result = UserController.checkUsernameExist(req.params.username)
  if(result){
    res.send("username exist")
  }else{
    res.send("username not exist")
  }
})

/**
 * ...
 */
router.get('/check_useremail_exist:useremail', (req: Request, res: Response) =>{
  var result = UserController.checkUserEmailExist(req.params.useremail)
  if(result){
    res.send("useremail exist")
  }else{
    res.send("useremail not exist")
  }
})

export default router;
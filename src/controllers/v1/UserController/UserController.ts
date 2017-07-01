/**
 * Copyright Marmoym 2017
 * 
 * Created in Jun 18, 2017
 */

import * as jwt from 'jsonwebtoken'
import models from '../../../models'
import config from '../../../config'
import * as scrypt from 'scrypt'

let scryptParameters = scrypt.paramsSync(0.1)

/**
 * ...
 */
class UserController {

  public test(input: String){
    // console.log("hello test"+ input)

    return false;

  }
 
  /**
   * ...
   */
  public getUserInfo(param: any) {

    let encodedPw = scrypt.kdfSync(param.pw, scryptParameters).toString('Base64')
    console.log(1, encodedPw)

    models.user.findOne({
      where : {
        username : param.username,
        password : encodedPw,
        status: {$not: "DELETED"}
      }
    }).then(function(user){
      console.log(1, '겟유저인포')
      console.log(1, user)

    })

    return true;
  }

  /**
   * ...
   */
  public getUserToken(param: any) {
    console.log(1, 'getuserToken' + param.username)
    var token = jwt.sign(
        {
          id : param.username
        },
        config.server.jwtKey,
        {
          expiresIn: '7d',
          subject: 'userInfo'
        }
      );
    console.log(3, token)
    return token;

  }

/**
 * ...
 * @param userId 
 * @param userPw 
 */
  public registerUser(param: any) {
    
    if(!this.checkUsernameExist(param.username)){
      return false;
    }

    if(!this.checkUserEmailExist(param.email)){
      return false;
    }

    let encodedPw = scrypt.kdfSync(param.pw, scryptParameters).toString('Base64')

    if(models.user.create({
          username: param.username,
          password: encodedPw,
          email: param.email
        }).then(
          function(result){
            console.log('회원가입완료')
            return true;
          }
        ).catch(
          function(err){
            console.log(err)
            return false;
          }
        )
    ){
      return true;
    }
    return false;
  }

  public checkUsernameExist(input: String){
    if(models.user.count({
          where: {
            status: {$not: "DELETED"},
            username: input    
          }
        }).then(
          function(result){
            if(result == 0){  
              console.log('아이디중복없음')
              return true;
            }else{
              return false;
            }
          }
        )
        .catch(
          function(err){
            console.log(err)
            return false;
          }
        )
      ){
      return true;
    }
    return false;
  }

  public checkUserEmailExist(input: String){
    if(models.user.count({
          where: {
            status: {$not: "DELETED"},
            email: input    
          }
        }).then(
          function(result){
            if(result == 0){
              console.log('이메일중복없음')
              return true;
            }else{
              return false;
            }
          }
        ).catch(
          function(err){
            console.log(err)
            return false;
          }
        )
      ){
      return true;
    }
    return false;
  }


}

export default new UserController()
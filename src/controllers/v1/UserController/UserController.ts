/**
 * Copyright Marmoym 2017
 * 
 * Created in Jun 18, 2017
 */

import * as jwt from 'jsonwebtoken'
import models from '../../../models'
import config from '../../../config'
import * as scrypt from 'scrypt'
import * as bcrypt from 'bcrypt'


let saltRounds = 10;
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
    console.log(1, 'getUserInfo' + param)

    return models.user.findOne({
                    where : {
                      username : param.username,
                      status: {$not: "DELETED"}
                    }
                  }).then(function(user){
                    console.log(1231231, user)
                      return user;
                  })
    // console.log(1, await result.user)
    // return await result;
  }

  /**
   * ...
   */
  public getUserToken(param: any) {

    console.log(1, 'getuserToken' + param.pw)
    var token;
    var result = this.getUserInfo(param)
    return result.then(function(user){
     
      
        if(bcrypt.compareSync(param.pw, user.password)){
          console.log(1, '1231231@2@@@@@@@@')
          token = jwt.sign(
                      {
                        id : user.username
                      },
                      config.server.jwtKey,
                      {
                        expiresIn: '7d',
                        subject: 'userInfo'
                      }
                    );
        }

        console.log(3, token)
        return token;

    })
    
    // if(result != null || result != 'undefined'){
    //   if(scrypt.verifyKdfSync(result, param.pw)){
    
    //     token = jwt.sign(
    //                 {
    //                   id : result.username
    //                 },
    //                 config.server.jwtKey,
    //                 {
    //                   expiresIn: '7d',
    //                   subject: 'userInfo'
    //                 }
    //               );
    //   }
    // }

   

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

    let encodedPw = bcrypt.hashSync(param.pw, saltRounds);

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
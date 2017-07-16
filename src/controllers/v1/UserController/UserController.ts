/**
 * Copyright Marmoym 2017
 * 
 * Created in Jun 18, 2017
 */

import * as jwt from 'jsonwebtoken'
import models from '../../../models'
import config from '../../../config'
import * as bcrypt from 'bcrypt'


let saltRounds = 10;


/**
 * ...
 */
class UserController {
 

  /**
   * ...
   */
  public getUserInfo(param: any) {

    return models.user.findOne({
                    where : {
                      username : param.username,
                      status: {$not: "DELETED"}
                    }
                  }).then((user) => {
                      return user;
                  })
  }

  /**
   * ...
   */
  public getUserToken(param: any) {

    var token;

    return this.getUserInfo(param).then( (user) => {
   
      if(bcrypt.compareSync(param.pw, user.password)) {
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
      return token;

  })

}

/**
   * ...
*/
public verifyUserToken(input_token: string) {
  try {
    var decoded = jwt.verify(input_token, config.server.jwtKey);
  } catch(err) {
    console.log(1, decoded)
    return false;
  }
  console.log(1, decoded)
  return true;
}

/**
 * ...
 * @param userId 
 * @param userPw 
 */
  public registerUser(param: any) {
    
    if(!this.checkUsernameExist(param.username)) {
      return false;
    }

    if(!this.checkUserEmailExist(param.email)) {
      return false;
    }

    let encodedPw = bcrypt.hashSync(param.pw, saltRounds);

    if(models.user.create({
          username: param.username,
          password: encodedPw,
          email: param.email
        }).then(
          (result) => {
            return true;
          }
        ).catch(
          (err) => {
            return false;
          }
        )
      ){
      return true;
    }
    return false;
  }

  /**
   * ...
   */
  public checkUsernameExist(input: String) {
    if(models.user.count({
          where: {
            status: {$not: "DELETED"},
            username: input    
          }
        }).then(
          (result) => {
            if(result == 0){  
              console.log('아이디중복없음')
              return true;
            }else{
              return false;
            }
          }
        )
        .catch(
          (err) => {
            console.log(err)
            return false;
          }
        )
      ){
      return true;
    }
    return false;
  }

  /**
   * ...
   */
  public checkUserEmailExist(input: String) {
    if(models.user.count({
          where: {
            status: {$not: "DELETED"},
            email: input    
          }
        }).then(
          (result) => {
            if(result == 0){
              console.log('이메일중복없음')
              return true;
            }else{
              return false;
            }
          }
        ).catch(
          (err) => {
            console.log(err)
            return false;
          }
        )
      ){
      return true;
    }
    return false;
  }

  /**
   * ...
   */
  public updateUserInfo(param: any) {
    if(!this.checkUserEmailExist(param.email)) {
      return false;
    }

    let encodedPw = bcrypt.hashSync(param.pw, saltRounds);

    if(models.user.update({
          password: encodedPw,
          email: param.email
        },{
          where : {
            username : param.username
          }
        }).then(
          (result) => {
            return true;
          }
        ).catch(
          (err) => {
            return false;
          }
        )
      ){
      return true;
    }
    return false;
  }

  /**
   * ...
   */
  public deleteUser(param: any) {
    
    if(models.user.update({
        status: 'DELETE'
        },{
          where : {
            username : param.username
          }
        }).then(
          (result) => {
            return true;
          }
        ).catch(
          (err) => {
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
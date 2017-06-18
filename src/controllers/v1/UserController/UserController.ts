/**
 * ...
 * 
 * @author Gimochi
 */

import * as jwt from 'jsonwebtoken'
import models from '../../../models'
import config from '../../../config'

class UserController {

  public test(input: String){
    console.log("hello test"+ input)

    return false;

  }

  public getUserInfo(userId: String, userPw: String){
    models.user.findAll({
      where : {
        id : userId
      }
    }).then(function(user){
      console.log(1, user.length)
    })

    return true;
  }

  public getUserToken(userId: String){
    console.log(1, 'getuserToken'+userId)
    var token = jwt.sign(
        {
          id : userId
        },
        config.server.jwtKey,
        {
          expiresIn: '7d',
          issuer: 'kweb.korea.ac.kr',
          subject: 'userInfo'
        }
      );
    console.log(3, token)
    return token;

  }
}

// function test(){
//   console.log('hello');
//   return true;
// }

export default new UserController()
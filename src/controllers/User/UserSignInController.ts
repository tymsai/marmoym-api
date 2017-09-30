import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import config from '../../config';
import { db1 } from '../../database';
import MarmoymError from '../../models/MarmoymError';
import ErrorType from '../../constants/ErrorType';

export const signInUser = async (userInfo) => {
  const User =  db1.User;

  return await User
    .findOne({
      where: {
        username: userInfo.username
      }
    })
    .catch(() => { 
      throw new MarmoymError(ErrorType.USER_NOT_FOUND);
    })
    .then(res => {
      const user = res.dataValues;
      if (bcrypt.compareSync(userInfo.password, user.password)) {
        return jwt.sign(
          {
            id: user.id,
            username: user.username,
            email: user.email
          },
          config.auth.jwtSecret,
          {
            expiresIn: config.auth.tokenExpireDuration
          }
        );
      } else {
        throw new MarmoymError(ErrorType.USER_INCORRECT_PASSWORD);
      }
    });
};
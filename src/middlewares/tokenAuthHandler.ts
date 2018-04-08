import * as jwt from 'jsonwebtoken';
import * as winston from 'winston';

import authConfig from '@config/authConfig';
import MarmoymError from "@models/MarmoymError";
// import ErrorType from '@constants/ErrorType';

/**
 * ...
 */
 async function _verifyUserToken(token: string, userId: number) {
  let decoded;
  try {
    decoded = jwt.verify(token, authConfig.jwtSecret);
    winston.debug('JWT decoded: ', decoded);
  } catch(err) {
    // throw new MarmoymError(ErrorType.TOKEN_INVALID);
  }

  if (decoded.id == userId) {
    return decoded;
  } else {
    // throw new MarmoymError(ErrorType.TOKEN_AND_USER_ID_INCOMPATIBLE);
  }
};

/**
 * ...
 */
export default function tokenAuthHandler(req, res, next) {
  const token = req.headers['x-access-token'];
  const userId = req.body.userId ? req.body.userId : req.params.userId;
  
  _verifyUserToken(token, userId)
    .then(result => {
      req['_token'] = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};

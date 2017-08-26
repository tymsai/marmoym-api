import * as jwt from 'jsonwebtoken';
import * as winston from 'winston';

import config from '../config';
import UserError from "../constants/ErrorType/UserError";


/**
 * ...
 */
const _verifyUserToken = async (token: string, username: any) => {
  let decoded;
  try {
    decoded = jwt.verify(token, config.auth.jwtSecret);
    winston.debug('JWT decoded: ', decoded);
  } catch(err) {
    throw UserError.INVALID_TOKEN;
  }

  if (decoded.username == username) {
    return decoded;
  } else {
    throw UserError.NOT_EQUAL_USERNAME;
  }
};

/**
 * ...
 */
export const tokenAuthHandler = (req, res, next) => {
  const token = req.headers['x-access-token'];
  const username = req.body.username;

  _verifyUserToken(token, username)
    .then(result => {
      req['_token'] = result;
      next();
    });
};
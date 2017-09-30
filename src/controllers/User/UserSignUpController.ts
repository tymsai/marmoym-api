import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import config from '../../config';
import { db1 } from '../../database';

/**
 * ...
 */
export const signUpUser = async (username, password, email) => {
  let encodedPw = bcrypt.hashSync(password, config.auth.hashSalt);
  return db1.User.create({
    username,
    password: encodedPw,
    email
  });
}
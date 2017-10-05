import * as bcrypt from 'bcrypt';

import db from '../../database';
import * as UserInsertDAO from '../../dao/User/UserInsertDAO';
import * as UserSelectDAO from '../../dao/User/UserSelectDAO';
import { transaction } from '../../database/databaseUtils';
import { authConfig } from '../../config/marmoym-config';


export const addUser = (req) => {
  return transaction(async trx => {
    const user = await UserSelectDAO.selectUserByEmailOrUsername(req.email, req.username);//check email exist

    if(user.length == 0){
      const encodedPw = bcrypt.hashSync(req.password, authConfig.hashSalt);
      const userInserted = await UserInsertDAO.insertUser(trx, req, encodedPw);

      return 'UserSignUpSuccess'
    }else {
      throw new Error('EmailorUsernameExist');
    }
  });
}
import * as authService from '@src/services/authService';

import { db1 } from '../../database';
import config from '../../config';

/**
 * ...
 */
export const deleteUser = async (req) => {
  return await db1.User.update(
    {
      status: 'DELETE'
    }, 
    {
      where : {
        username : req.body.username
      }
    });
};
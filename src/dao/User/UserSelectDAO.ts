import db from '../../database';

export const selectUserByEmailOrUsername = (email: string, username: string) => {
  return db('User').where({
    email: email
  }).orWhere({
    username: username
  }).select()
};
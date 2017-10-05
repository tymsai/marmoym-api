import db from '../../database';

export const insertUser = (trx, data: any, encodedPw: string) => {
  return db.transacting(trx)
    .into('User')
    .insert({
      username: data.username,
      password: encodedPw,
      email: data.email,
      status: 'N'//TODO
    })
};
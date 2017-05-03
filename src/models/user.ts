import * as Sequelize from 'sequelize';

export interface UserAttributes {
  email: string;
  name: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
  // I'm exposing every DB column as an instance field to so that tsc won't complain.
  id: number;

  email: string;
  name: string;
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: Sequelize.STRING,
    name: Sequelize.STRING
  });
  console.log("SIBAL")
  return User;
}
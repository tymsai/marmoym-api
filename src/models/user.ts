import * as Sequelize from 'sequelize';

// export interface UserAttributes {
//   id: number;
//   email: string;
//   name: string;
// }

// export interface UserInstance extends Sequelize.Instance<UserAttributes> {
//   // I'm exposing every DB column as an instance field to so that tsc won't complain.
//   id: number;
//   email: string;
//   name: string;
// }

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
  var UserOne = sequelize.define('UserOne', {
    id: { type : DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    status: Sequelize.STRING,
  }, {
    timestamps: true,
    tableName: 'USERONE'
  }
  );
  return UserOne;
}
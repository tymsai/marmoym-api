import * as Sequelize from 'sequelize';

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  let user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    email: Sequelize.STRING,
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: Sequelize.STRING,
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });

  return user;
}
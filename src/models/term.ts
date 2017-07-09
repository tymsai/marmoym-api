import * as Sequelize from 'sequelize';

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes){
  let term = sequelize.define('term', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "NORMAL"
    }

  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });

  return term;
}
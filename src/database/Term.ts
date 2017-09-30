import * as Sequelize from 'sequelize';

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Term = sequelize.define('Term', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    roman: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  });

  return Term;
}
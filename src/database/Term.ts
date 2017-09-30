import * as Sequelize from 'sequelize';

export interface TermAttributes {
  id?: number;
  label?: string;
  roman?: string;
}

export interface TermInstance extends Sequelize.Instance<TermAttributes> {
  createdAt: Date;
  updatedAt: Date;
  dataValues?: any;
}

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
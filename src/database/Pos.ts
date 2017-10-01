import * as Sequelize from 'sequelize';

export interface PosAttributes {
  id?: number;
  label?: string;
  labelEn?: string;
  DefinitionId?: number;
}

export interface PosInstance extends Sequelize.Instance<PosAttributes> {
  createdAt: Date;
  updatedAt: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Pos = sequelize.define('Pos', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    labelEn: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        Pos.belongsToMany(models.Definition, {
          through: "DefinitionPos",
        });
      }
    }
  });
  return Pos;
}
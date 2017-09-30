import * as Sequelize from 'sequelize';

export interface OriginAttributes {
  id?: number;
  label?: string;
  status?: any;
  termId?: number;
  DefinitionId?: number;
}

export interface OriginInstance extends Sequelize.Instance<OriginAttributes> {
  createdAt: Date;
  updatedAt: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Origin = sequelize.define('Origin', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "NORMAL"
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        Origin.belongsToMany(models.Definition, {
          through: 'DefinitionOrigin'
        })
      }
    }
  });
  return Origin;
};
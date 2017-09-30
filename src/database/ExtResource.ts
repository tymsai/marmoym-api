import * as Sequelize from 'sequelize';

export interface ExtResourceAttributes {
  id?: number;
  url?: string;
  status?: any;
}

export interface ExtResourceInstance extends Sequelize.Instance<ExtResourceAttributes>{
  createdAt: Date;
  updatedAt: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const ExtResource = sequelize.define('ExtResource', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
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
        ExtResource.belongsToMany(models.Definition, {
          through: 'DefinitionExtResource'
        })
      }
    }
  });
  return ExtResource;
};
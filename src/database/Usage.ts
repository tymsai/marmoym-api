import * as Sequelize from 'sequelize';

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Usage = sequelize.define('Usage', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(512),
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
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        Usage.belongsToMany(models.Definition, {
          through: "DefinitionUsage"
        });
      }
    }
  });
  return Usage;
}
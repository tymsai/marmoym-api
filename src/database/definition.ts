import * as Sequelize from 'sequelize';

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Definition = sequelize.define('Definition', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    contents: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "NORMAL"
    },
    upvote_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },
    downvote_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    }
  }, { 
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        Definition.belongsTo(models.Term, {as: "term"});
        Definition.belongsTo(models.User, {as: "user"});
      }
    }
  });

  return Definition;
};
import * as Sequelize from 'sequelize';

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    target_type: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "D",
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     contents: {
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
        Comment.belongsTo(models.User, {as: "user"});
      }
    }
  });
  return Comment;
};
import * as Sequelize from 'sequelize';

export interface CommentAttributes {
  id?: number;
  articleType?: string;
  articleId?: number;
  body?: string;
  parentCommentId?: number;
  status?: any;
  userId?: number;
}

export interface CommentInstance extends Sequelize.Instance<CommentAttributes> {
  createdAt: Date;
  updatedAt: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    article_type: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    parent_comment_id: {
      type: DataTypes.INTEGER,
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
        Comment.belongsTo(models.User, {as: "user"});
      }//
    }
  });
  return Comment;
};
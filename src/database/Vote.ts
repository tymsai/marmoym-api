import * as Sequelize from 'sequelize';

export interface VoteAttributes {
  id?: number;
  targetType?: string;
  targetId?: number;
  upvoteCount?: number;
  downvoteCount?: number;
 }

export interface VoteInstance extends Sequelize.Instance<VoteAttributes> {
  createdAt?: Date;
  updatedAt?: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Vote = sequelize.define('Vote', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    target_type: {
      type: DataTypes.STRING(16),
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upvote_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    downvote_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  });
  return Vote;
};
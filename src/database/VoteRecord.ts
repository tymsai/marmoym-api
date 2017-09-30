import * as Sequelize from 'sequelize';

export interface VoteRecordAttributes {
  id?: number;
  targetType?: string;
  targetId?: number;
  action?: number;
  userId?: number;
}

export interface VoteRecordInstance extends Sequelize.Instance<VoteRecordAttributes> {
  createdAt?: Date;
  updatedAt?: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const VoteRecord = sequelize.define('VoteRecord', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    target_type: {
      type: DataTypes.STRING(16)
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    action: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        VoteRecord.belongsTo(models.User, { 
          as: "user"
        });
      }
    }
  });
  return VoteRecord;
};
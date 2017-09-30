import * as Sequelize from 'sequelize';

export interface DefinitionAttributes {
  id?: number;
  label?: string;
  status?: any;
  termId?: number;
  userId?: number;
}

export interface DefinitionInstance extends Sequelize.Instance<DefinitionAttributes> {
  createdAt: Date;
  updatedAt: Date;
  dataValues?: any;
}

export default function(sequelize: Sequelize.Sequelize, DataTypes) {
  const Definition = sequelize.define('Definition', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "NORMAL"
    },
  }, { 
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        Definition.belongsTo(models.Term, {
          as: 'Term'
        });
        Definition.belongsTo(models.User, {
          as: 'User'
        });
        Definition.belongsTo(models.Vote, {
          as: 'Vote'
        });
      }
    }
  });

  return Definition;
};
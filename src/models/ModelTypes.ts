import * as Sequelize from 'sequelize';
import { UserAttributes, UserInstance } from '@src/database/User';
import { DefinitionAttributes, DefinitionInstance } from '@src/database/Definition';
import { VoteAttributes, VoteInstance } from '@src/database/Vote';
import { OriginAttributes, OriginInstance } from '@src/database/Origin';
import { CommentAttributes, CommentInstance} from '@src/database/Comment';
import { ExtResourceAttributes, ExtResourceInstance }from '@src/database/ExtResource';

export interface Model {
  sequelize?: Sequelize.Sequelize;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Definition: Sequelize.Model<DefinitionInstance, DefinitionAttributes>;
  Vote: Sequelize.Model<VoteInstance, VoteAttributes>; 
  Origin: Sequelize.Model<OriginInstance, OriginAttributes>;
  Comment: Sequelize.Model<CommentInstance, CommentAttributes>;
  ExtResource: Sequelize.Model<ExtResourceInstance, ExtResourceAttributes>;
}
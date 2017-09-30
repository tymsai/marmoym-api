import * as Sequelize from 'sequelize';
import { UserAttributes, UserInstance } from '@src/database/User';
import { DefinitionAttributes, DefinitionInstance } from '@src/database/Definition';
import { VoteAttributes, VoteInstance } from '@src/database/Vote';
import { VoteRecordAttributes, VoteRecordInstance } from "@src/database/VoteRecord";
import { OriginAttributes, OriginInstance } from '@src/database/Origin';
import { CommentAttributes, CommentInstance} from '@src/database/Comment';
import { ExtResourceAttributes, ExtResourceInstance }from '@src/database/ExtResource';
import { PosAttributes, PosInstance } from "@src/database/Pos";
import { TermAttributes, TermInstance } from "@src/database/Term";
import { UsageAttributes, UsageInstance } from "@src/database/Usage";

export interface Model {
  sequelize?: Sequelize.Sequelize;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Definition: Sequelize.Model<DefinitionInstance, DefinitionAttributes>;
  Vote: Sequelize.Model<VoteInstance, VoteAttributes>; 
  VoteRecord: Sequelize.Model<VoteRecordInstance,VoteRecordAttributes>;
  Origin: Sequelize.Model<OriginInstance, OriginAttributes>;
  Comment: Sequelize.Model<CommentInstance, CommentAttributes>;
  ExtResource: Sequelize.Model<ExtResourceInstance, ExtResourceAttributes>;
  Pos: Sequelize.Model<PosInstance, PosAttributes>;
  Term: Sequelize.Model<TermInstance, TermAttributes>;
  Usage: Sequelize.Model<UsageInstance, UsageAttributes>;
}
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn, 
} from "typeorm";

import BaseEntity from '@entities/BaseEntity';
import { DB1 } from '@database/db';

@Entity({ database: DB1 })
export default class Term extends BaseEntity {
  @Column()
  label: string;

  @Column()
  roman: string;

  @Column()
  status: string;
  
};

import * as fs from 'fs';
import * as path from 'path';

import * as Sequelize from 'sequelize';
const config = require('../config/db.config.dev.json');

import * as User from './user';
console.log("hello")

type Model = Sequelize.Model;

interface DbConnection {
  User: Model;
}
var db = {};

var sequelize = new Sequelize(config);

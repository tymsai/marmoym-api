import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    timezone: config.db.timezone
  }
);

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model['name']] = model;
  });


Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

export default db;

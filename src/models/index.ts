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
  },
);

var User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  }, {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
  });

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe111',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(1, jane)
  // console.log(jane.get({
  //   plain: true
  // }));
});

export default sequelize;

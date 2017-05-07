import models from '../models';

function initialize() {
  return models['sequelize'].sync()
}

export {
  initialize
}
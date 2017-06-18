/**
 * Copyright Marmoym 2017
 *
 * @author Seunghyun Park
 */

import models from '../models'

/**
 * ...
 */
class ModelService {

  init() {
    return models['sequelize'].sync();
  }

}

export default new ModelService;
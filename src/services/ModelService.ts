/**
 * Copyright Marmoym 2017
 *
 * @author Enginehenryed <enginehenryed@gmail.com>
 */

import models from '../models'

/**
 * ...
 */
class ModelService {

  public init() {
    return models['sequelize'].sync();
  }

}

export default new ModelService;
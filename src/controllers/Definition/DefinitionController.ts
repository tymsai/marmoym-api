import { db1 } from '../../database';
import * as winston from 'winston';

/**
 * ...
 */
export async function getDefinitionByTermId(termId: any) {
  var list = await db1.Definition.findAll({
    where: {
      status: { $not: "DELETED" },
      $or: [
        { term_id: termId }
      ]
    }
  })
    .then(definitions => definitions)
    .catch(err => {
      winston.error(err)
    });

  return list.map(info => info.dataValues)
}

/**
 * ...
 */
export const registerDefinition = async function registerDefinition(params: any, termId: number) {
  return await db1.Definition.create({
    termId: termId,
    label: params.definitionContents,
    userId: 1
  })
    .then(result => result.dataValues.id)
    .catch(err => {
      winston.error(err);
    });

}

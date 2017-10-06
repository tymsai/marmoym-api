import db from '../../database';

export function getDefinitionsByTermId (termId: number) {
  return db('Definition').where({
      term_id: termId
    })
    .select();
};
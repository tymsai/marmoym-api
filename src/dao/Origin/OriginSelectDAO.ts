import db from '../../database';

export function selectOriginByDefinitionId (defId: number) {
  return db('Origin').where({
    def_id: defId,
    status: 'N'
  })
  .select('label')
  .orderBy('created_at', 'desc');
};


import db from '../../database';

export function insertOrigin(trx, label: string, defId: number) {
  return db.transacting(trx)
    .into('Origin')
    .insert({
      label: label,
      def_id : defId,
      status: 'N',
    });
};
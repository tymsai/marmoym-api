import db from '../../database';

export function insertTerm(trx, label: string, roman: string) {
  return db.transacting(trx)
    .into('Term')
    .insert({
      label: label,
      roman: roman,
      status: 'N',
    });
};
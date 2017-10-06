import db from '../../database';
import * as TermSelectDAO from '../../dao/Term/TermSelectDAO';
import { transaction } from '../../database/databaseUtils';

export async function getTerms(req) {
  const termSelected = await TermSelectDAO.getTerms(req.offset);
  return termSelected;
};
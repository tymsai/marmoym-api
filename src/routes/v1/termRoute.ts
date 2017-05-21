import * as express from 'express';

/**
 * Term routes
 * /terms
 */

let router = express.Router();

/**
 * ...
 */
router.get('/', (req, res) => {

  res.send("/terms");
})

router.get('/:termId', (req, res) => {
  res.send("/terms/termId")
});

export default router
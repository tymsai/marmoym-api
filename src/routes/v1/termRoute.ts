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

const URI = "/terms/"

const resolveUrl = (segment) => {
  return `${URI}${segment}`
}

export default (router) => {

  router.get(resolveUrl('x'), () => {

  });

  router.get("/terms/y", () => {

  })

}
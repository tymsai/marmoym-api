/**
 * Term routes
 * /terms
 */

const URI = "/terms/"

const resolveUrl = (segment) => {
  return `${URI}${segment}`
}

export default (router) => {

  /**
   * ...
   *
   *
   */
  router.get(resolveUrl('x'), () => {

  });

  /**
   * ...
   */
  router.get("/terms/y", () => {

  })

}
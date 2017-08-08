/**
 * Example
 */
let response = {
  code: 'SOME_CODE',
  payload: 'DATA'
}

/**
 * ...
 */
export const respond = (res, result) => {
  res.status(200).json({
    code: 1,
    payload: result
  });
};
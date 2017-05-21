import models from '../models'

export const run = function () {
  console.log(11)
  models['user']
    .create({
      username: "powerwer123123",
      email: "mskim94@coscoi.net",
      password: "123qwe",
    })
  .then(res => {
    console.log('succeed')
  })
}

function test(req,res) {
  console.log("HERE");
  res.send('Hello World!222')
  return res
}
export {
  test
}
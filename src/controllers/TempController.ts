import models from '../models'

function run() {
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

export {
  run
}
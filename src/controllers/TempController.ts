import models from '../models'

function run() {
  console.log(11)
  models['user']
    .create({
      username: "powerwer"
    })
}

export {
  run
}
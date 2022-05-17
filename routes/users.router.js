const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res) => {
  const users = []
  const { limit } = req.query
  let n = 10;

  if (limit) {
    n = limit
  }

  for (let index = 0; index < n; index++) {
    users.push({
      firstName: faker.name.findName(),
      lastName: faker.name.findName()
    })
  }

  res.json(users)
})

router.get('/:id', (req, res) => {

  const { id } = req.params

  res.json({
    id,
    firstName: "Producto 1",
  })
})


module.exports = router

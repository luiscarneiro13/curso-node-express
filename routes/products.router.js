const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res) => {
  const products = []
  const { limit } = req.query
  let n = 10;

  if (limit) {
    n = limit
  }

  for (let index = 0; index < n; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
})

router.get('/filter', (req, res) => {

  res.send('Endpoint Filter')
})

router.get('/:id', (req, res) => {

  const { id } = req.params

  res.json({
    id,
    name: "Producto 1",
    price: 2000
  })
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: "Creación",
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: "Creación",
    id,
    data: body,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: "Borrado",
    id,
  })
})


module.exports = router

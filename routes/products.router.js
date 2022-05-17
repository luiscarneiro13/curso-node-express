const express = require('express')
const ProductsServices = require('../services/product.service')

const router = express.Router()
const service = new ProductsServices()

router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body
  const product = service.create(body)
  res.json(product)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body
  const product = service.update(id, changes)
  res.json(product)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const product = service.delete(id)
  res.json(product)
})


module.exports = router

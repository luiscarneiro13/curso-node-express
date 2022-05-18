const express = require('express')
const ProductsServices = require('../services/product.service')

const router = express.Router()
const service = new ProductsServices()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await service.findOne(id)
  res.json(product)
})

router.post('/', async (req, res) => {
  const body = req.body
  const product = await service.create(body)
  res.json(product)
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const changes = req.body
    const product = await service.update(id, changes)
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const product = await service.delete(id)
  res.json(product)
})


module.exports = router

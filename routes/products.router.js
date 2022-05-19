const express = require('express')
const ProductsServices = require('../services/product.service')

/** Inicio Para validación */
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema')
const validatorHandler = require('../middlewares/validator.handler')
/** Fin Para validación */

const router = express.Router()
const service = new ProductsServices()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})
/** Ejemplo de uso de middleware para controlar errores */
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await service.findOne(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const product = await service.create(body)
    res.json(product)
  })

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const changes = req.body
      const product = await service.update(id, changes)
      res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const product = await service.delete(id)
  res.json(product)
})


module.exports = router

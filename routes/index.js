const express = require('express')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const ejemploRouter = require('./ejemplo.router')

function routerApi(app) {

  const routerV1 = express.Router()
  const routerV2 = express.Router()




  app.use('/api/v1', routerV1)

  routerV1.use('/products', productsRouter)
  routerV1.use('/users', usersRouter)

  /* Ejemplo de varias versiones de la api */
  app.use('/api/v2', routerV2)
  routerV2.use('/', ejemploRouter)
}

module.exports = routerApi

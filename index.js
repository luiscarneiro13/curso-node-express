const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log("Está corriendo en el puerto: " + port)
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)/* Este middleware es el último que se ejecutará porque no tiene un next() */

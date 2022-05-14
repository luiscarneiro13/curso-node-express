const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Inicio del primer server')
})

app.listen(port, () => {
  console.log("Está corriendo en el puerto: " + port)
})


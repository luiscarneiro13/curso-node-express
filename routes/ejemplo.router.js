const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Primera aplicación Nodejs')
})

module.exports = router

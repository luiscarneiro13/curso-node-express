const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Endpoint Filter')
})

module.exports = router

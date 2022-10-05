const express = require('express')
const router = express.Router()
const paystakApi = require('./paystack.js')

router.post('/success', paystakApi.verifyPayment)

module.exports = router

const transactionService = require('../services/transactionService.js')
const express = require('express')
const router = express.Router()


router.get('/transactions', function (req, res) {
  try {
    res.send({status:200, data: transactionService.getAllTransactions()})
  } catch (e) {
    res.send()
  }
})

router.post('/transactions',  (req, res) => {
  const result = transactionService.addTransaction(req.body)
  if (result) {
    res.send({ status: 200, data: result })
  }
  else {
    res.send({ status: 400, error: 'Wrong transaction data' })
  }
})

module.exports = router
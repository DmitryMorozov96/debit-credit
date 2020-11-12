const transactionService = require('../services/transactionService.js')
const express = require('express')
const router = express.Router()


router.get('/transactions', function (req, res) {
    res.status(200).json(transactionService.getAllTransactions())
})

router.post('/transactions',  (req, res) => {
    const result = transactionService.addTransaction(req.body)
    if (result) {
      res.status(200).json(result)
  }
})

module.exports = router
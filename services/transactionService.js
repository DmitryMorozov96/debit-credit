const Transaction = require('../models/transaction')
let transactions = [{id: '1', type: 'debit', value: 'value'}]

const addTransaction = (data) => {
    const transaction = new Transaction(data.id, data.type, data.value)
    transactions.push(transaction)
    return transactions
}

const getAllTransactions = () => {
    return transactions
}

module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions
}

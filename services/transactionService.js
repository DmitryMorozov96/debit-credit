const Transaction = require('../models/transaction')
let transactions = []
let balance = 0
// TODO: SOME USER MODEL WITH BALANCES LIKE TRANSACTIONS
const addTransaction = (data) => {
    const transaction = new Transaction(data.id, data.type, data.value)
    if (data.type === 'Debit') {
        balance += Number.parseFloat(data.value)
    }
    else {
        balance -= Number.parseFloat(data.value)
    }
    if (balance >= 0) {
        transactions.push(transaction)
        return {transactions, balance}
    }
}

const getAllTransactions = () => {
    return {transactions, balance}
}

module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions
}

const Transaction = require('../models/transaction.js')
const User = require('../models/user.js')
let transactions = []
let tstUser = new User('test', 'very stronk password', 'Samid', 'Babun', 0)
// TODO: SOME USER MODEL WITH BALANCES LIKE TRANSACTIONS
const addTransaction = (data) => {
    const transaction = new Transaction(data.id, data.type, data.value)
    if (data.type === 'Debit') {
        tstUser.setUserBalance(tstUser.getUserBalance() + Number.parseFloat(data.value))
    }
    else {
        tstUser.setUserBalance(tstUser.getUserBalance() - Number.parseFloat(data.value))
    }
    if (tstUser.getUserBalance() >= 0) {
        transactions.push(transaction)
        return {transactions, tstUser}
    }
}

const getAllTransactions = () => {
    return {transactions, tstUser}
}

module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions
}

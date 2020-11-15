const Transaction = require('../models/transaction.js')
const User = require('../models/user.js')
let transactions = []
let tstUser = new User('morozov.dmitry', 'very strong password', 'Dmitry', 'Morozov', 0)

const addTransaction = (data) => {
    const transaction = new Transaction(data.id, data.type, data.value, tstUser.getUserName, data.description)
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

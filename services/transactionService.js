const Transaction = require('../models/transaction.js')
const User = require('../models/user.js')
let transactions = []
let tstUser = new User('morozov.dmitry', 'very strong password', 'Dmitry', 'Morozov', 0)

const addTransaction = (data) => {
    const transaction = new Transaction(data.id, data.type, data.value, tstUser.getUserName, data.description)
    if (Number.parseFloat(data.value) > 0) {
        if (data.type === 'Debit') {
            tstUser.setUserBalance(tstUser.getUserBalance() + Number.parseFloat(data.value))
            transactions.push(transaction)
            return {transactions, tstUser}
        }
        else {
            if (tstUser.getUserBalance() >= data.value) {
                tstUser.setUserBalance(tstUser.getUserBalance() - Number.parseFloat(data.value))
                transactions.push(transaction)
                return {transactions, tstUser}
            }
        }
    }
}

const getAllTransactions = () => {
    return {transactions, tstUser}
}

module.exports = {
    addTransaction: addTransaction,
    getAllTransactions: getAllTransactions
}

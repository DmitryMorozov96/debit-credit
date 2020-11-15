module.exports = class User {
    constructor (username, password, name, surname, balance) {
        this.username = username
        this.password = password
        this.name = name
        this.surname = surname
        this.balance = balance
    }
    getUserBalance () {
        return this.balance
    }
    setUserBalance (newBalance) {
        this.balance = newBalance
    }
}
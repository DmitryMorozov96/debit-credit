module.exports = class Transaction {
    constructor (id, type, value, userID) {
        this.id = id
        this.type = type
        this.value = value
        this.userID = userID
    }
}
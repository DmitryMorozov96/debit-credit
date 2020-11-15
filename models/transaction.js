module.exports = class Transaction {
    constructor (id, type, value, userID, description) {
        this.id = id
        this.type = type
        this.value = value
        this.userID = userID
        this.description = description
    }
}
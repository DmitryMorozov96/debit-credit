import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'

const app = new Vue({
    el: '#app',
    data() {
        return {
            form: {
                transaction: {
                    id: '11',
                    type: 'Debit',
                    value: '',
                    description: '',
                    visible: false
                },
                user: {
                    name: '',
                    surname: '',
                    balance: 0
                }
            },
            transactions: []
        }
    },
    async mounted() {
        const response = await request('/transactions')
        if (response.status === 200){
            response.transactions && response.transactions.forEach(trs => {
                trs.visible = false
            })
            this.transactions = response.transactions
            this.form.user = { name: response.tstUser.name, surname: response.tstUser.surname, balance: response.tstUser.balance }
        } else {
            alert(response.error);
        }
    },
    methods: {
        async addTransaction() {
            const values = this.form.transaction
            const response = await request('/transactions', 'POST', values)
            if (response.status === 200){
                response.transactions && response.transactions.forEach(trs => {
                    trs.visible = false
                })
                this.transactions = response.transactions
                this.form.user = { name: response.tstUser.name, surname: response.tstUser.surname, balance: response.tstUser.balance }
            }
            else {
                alert(response.error);
            }
        }
    }
})

/**
 * Additional function that works with requests to server
 * @param {Strimg} url 
 * @param {String} method 
 * @param {Object} data 
 */
async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body
        
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {method, headers, body})
        return await response.json()
    } catch (e) {
        console.warn('Error', e.message)
    }
}


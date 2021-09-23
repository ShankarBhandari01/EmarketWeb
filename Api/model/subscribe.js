const mongoose = require('mongoose')
const SubscribeUser = mongoose.model('Subscribe', {
    SubscribeBy_Name: {
        type: String
    },
    SubscribeBy_Email: {
        type: String
    }
})

module.exports = SubscribeUser;
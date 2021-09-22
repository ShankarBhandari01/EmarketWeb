const mongoose = require("mongoose")
const User = mongoose.model('user', {
    fullName: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dob: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    }

})

module.exports = User;

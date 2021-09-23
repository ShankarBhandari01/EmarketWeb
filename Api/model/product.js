
const mongoose = require("mongoose")
const UploadContent = mongoose.model("uploadProduct", {
    heading: {
        type: String,
        required: true,
    },
    content_description: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    postedAt: {
        type: String,
        default: new Date().toLocaleDateString()
    }

});


module.exports = UploadContent;

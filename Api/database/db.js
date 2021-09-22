const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/E_market', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then((message) => {
    console.log("Database connected!!!")
}).catch((error) => {
    console.log(error.toString)
})

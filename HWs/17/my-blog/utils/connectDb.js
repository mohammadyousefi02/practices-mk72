const mongoose = require("mongoose")


async function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
}

// module.exports = connectToDb

module.exports = connectToDb
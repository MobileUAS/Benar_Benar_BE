const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    username: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema)
module.exports = User
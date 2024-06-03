const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL || "mongodb+srv://FaishalNando:123@cluster0.nb8ckwz.mongodb.net/Express_Mobile"

const db = mongoose.connect(DB_URL)
module.exports = db
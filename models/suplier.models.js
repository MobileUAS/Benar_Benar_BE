const mongoose = require('mongoose')

const suplierSchema = new mongoose.Schema({
    suplierID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Suplier"
    },
    nama: String,
    alamat: String,
})

const Suplier = mongoose.model("Suplier", suplierSchema)
module.exports = Suplier
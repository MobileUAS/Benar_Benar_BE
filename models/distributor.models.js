const mongoose = require('mongoose')

const distributorSchema = new mongoose.Schema({
    distributorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Suplier"
    },
    nama: String,
    alamat: String,
})

const Distributor = mongoose.model("Distributor", distributorSchema)
module.exports = Distributor
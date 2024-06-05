const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    barangID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    nama: String,
    harga: Number,
    jumlah: Number,
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    barangID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    nama: String,
    alamat: String,
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product
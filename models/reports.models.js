const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    jumlah: Number,
    stokMasuk: Number,
    stokKeluar: Number,
    productID: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product' },
    suplierID: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Suplier' },
    distributorID: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Distributor' }
}, { 
    timestamps: true
 });

const Reports = mongoose.model('Reports', reportSchema);
module.exports = Reports

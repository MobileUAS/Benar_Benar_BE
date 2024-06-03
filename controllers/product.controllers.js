const Product = require('../models/product.models')

// Membuat produk baru
const createProduct = async (req, res) => {
    try {
        const { nama, harga } = req.body
        const product = new Product({ nama, harga })
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Mendapatkan semua produk
const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Mendapatkan produk berdasarkan ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Memperbarui produk berdasarkan ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { nama, harga } = req.body
        const product = await Product.findByIdAndUpdate(id, { nama, harga }, { new: true })
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Menghapus produk berdasarkan ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}

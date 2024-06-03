const Suplier = require('../models/suplier.models');

module.exports = {
    // Create a new suplier
    createSuplier: async (req, res) => {
        try {
            const { nama, alamat } = req.body;
            const newSuplier = new Suplier({ nama, alamat });
            await newSuplier.save();
            res.status(201).json(newSuplier);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get all supliers
    getSupliers: async (req, res) => {
        try {
            const supliers = await Suplier.find();
            res.status(200).json(supliers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single suplier by ID
    getSuplierById: async (req, res) => {
        try {
            const suplier = await Suplier.findById(req.params.id);
            if (!suplier) return res.status(404).json({ message: 'Suplier not found' });
            res.status(200).json(suplier);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a suplier by ID
    updateSuplier: async (req, res) => {
        try {
            const { nama, alamat } = req.body;
            const updatedSuplier = await Suplier.findByIdAndUpdate(
                req.params.id,
                { nama, alamat },
                { new: true }
            );
            if (!updatedSuplier) return res.status(404).json({ message: 'Suplier not found' });
            res.status(200).json(updatedSuplier);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a suplier by ID
    deleteSuplier: async (req, res) => {
        try {
            const suplier = await Suplier.findByIdAndDelete(req.params.id);
            if (!suplier) return res.status(404).json({ message: 'Suplier not found' });
            res.status(200).json({ message: 'Suplier deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

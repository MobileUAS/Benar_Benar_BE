const Distributor = require('../models/distributor.models');

module.exports = {
    // Create a new distributor
    createDistributor: async (req, res) => {
        try {
            const { nama, alamat } = req.body;
            const newDistributor = new Distributor({ nama, alamat });
            await newDistributor.save();
            res.status(201).json(newDistributor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get all distributors
    getDistributors: async (req, res) => {
        try {
            const distributors = await Distributor.find();
            res.status(200).json(distributors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single distributor by ID
    getDistributorById: async (req, res) => {
        try {
            const distributor = await Distributor.findById(req.params.id);
            if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
            res.status(200).json(distributor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a distributor by ID
    updateDistributor: async (req, res) => {
        try {
            const { nama, alamat } = req.body;
            const updatedDistributor = await Distributor.findByIdAndUpdate(
                req.params.id,
                { nama, alamat },
                { new: true }
            );
            if (!updatedDistributor) return res.status(404).json({ message: 'Distributor not found' });
            res.status(200).json(updatedDistributor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a distributor by ID
    deleteDistributor: async (req, res) => {
        try {
            const distributor = await Distributor.findByIdAndDelete(req.params.id);
            if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
            res.status(200).json({ message: 'Distributor deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

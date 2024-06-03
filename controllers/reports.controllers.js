const Reports = require('../models/reports.models');
const Product = require('../models/product.models'); 
const Suplier = require('../models/suplier.models');
const Distributor = require('../models/distributor.models');

module.exports = {
    // Create a new report
    createReport: async (req, res) => {
        try {
            const { jumlah, stokMasuk, stokKeluar, productID, suplierID, distributorID } = req.body;
            const newReport = new Reports({ jumlah, stokMasuk, stokKeluar, productID, suplierID, distributorID });
            await newReport.save();
            res.status(201).json(newReport);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get all reports
    getReports: async (req, res) => {
        try {
            const reports = await Reports.find()
                .populate('productID', 'nama')
                .populate('suplierID', 'nama')
                .populate('distributorID', 'nama');
            res.status(200).json(reports);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single report by ID
    getReportById: async (req, res) => {
        try {
            const report = await Reports.findById(req.params.id)
                .populate('productID', 'nama')
                .populate('suplierID', 'nama')
                .populate('distributorID', 'nama');
            if (!report) return res.status(404).json({ message: 'Report not found' });
            res.status(200).json(report);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a report by ID
    updateReport: async (req, res) => {
        try {
            const { jumlah, stokMasuk, stokKeluar, productID, suplierID, distributorID } = req.body;
            const updatedReport = await Reports.findByIdAndUpdate(
                req.params.id,
                { jumlah, stokMasuk, stokKeluar, productID, suplierID, distributorID },
                { new: true }
            ).populate('productID', 'namaproduct')
             .populate('suplierID', 'nama')
             .populate('distributorID', 'nama');
            if (!updatedReport) return res.status(404).json({ message: 'Report not found' });
            res.status(200).json(updatedReport);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a report by ID
    deleteReport: async (req, res) => {
        try {
            const report = await Reports.findByIdAndDelete(req.params.id);
            if (!report) return res.status(404).json({ message: 'Report not found' });
            res.status(200).json({ message: 'Report deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

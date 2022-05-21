const mongoose = require("mongoose");

const centerSchema = new mongoose.Schema({
    center_code: {
        type: String,
        required: true,
        unique:true
    },
    center_email: {
        type: String,
        unique: true,
        required: true
    },
    center_name: {
        type: String,
        required: true
    },
    center_type: {
        type: String,
        required: true,
        enum: ['RC', 'SC']
    },
    address: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_updated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Centers = mongoose.model('centers', centerSchema);
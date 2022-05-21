const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role_name: {
        type: String,
        required: true
    },
    role_permissions: [String],
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_updated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Roles = mongoose.model('roles', roleSchema);
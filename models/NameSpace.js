const mongoose = require('mongoose');

const namespaceSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type:String,
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

module.exports = NameSpace = mongoose.model('namespace', namespaceSchema);
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type:String,
        required: true
    },
    namespaceID:{
        type:String,
        ref:'namespace',
        required: true
    },
    users:[{
        type:String,
        ref:'users',
    }],
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_updated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Room = mongoose.model('rooms', roomSchema);
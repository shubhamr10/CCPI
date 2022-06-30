const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text:{
        type: String,
        required:true
    },
    link:{
        type:String
    },
    namespaceID:{
        type:String,
        ref:'namespace',
        required: true
    },
    roomID:{
        type:String,
        ref:'rooms',
        required: true
    },
    user:{
        type:String,
        ref:'users',
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

module.exports = Messages = mongoose.model('messages', messageSchema);
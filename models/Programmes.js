const mongoose = require("mongoose");

const programmeSchema = new mongoose.Schema({
    programme_code:{
        type:String,
        required:true
    },
    programme_name:{
        type:String,
        required:true
    },
    total_semesters:{
        type:Number,
        required:true
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

module.exports = Programme = mongoose.model('programmes', programmeSchema);

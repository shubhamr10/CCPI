const mongoose = require("mongoose");

const annoucementNewsSchema = new mongoose.Schema({
    information_type:{
        type:String,
        required:true,
        enum:['GLOBAL','PROGRAMME']
    },
    message:{
        type: String,
        required: true,
    },
    link:{ type: String },
    study_center_id: {
        type: String,
        ref:'centers'
    },
    programme_id: {
        type: String,
        ref:'programmes'
    },
    regional_center_id: {
        type: String,
        ref:'centers'
    },
    semester: {
        type: Number
    },
    uploaded_by:{
        type:String,
        ref:'users',
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

module.exports = AnnouncementNews = mongoose.model('annoucementnews', annoucementNewsSchema);
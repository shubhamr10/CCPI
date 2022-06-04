const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role_id: {
        type: String,
        required: true,
        ref:'roles'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
      type:String,
      required:true
    },
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
    subjects: [{
        type: String
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

module.exports = Users = mongoose.model('users', userSchema);
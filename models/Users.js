const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    organizationName: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    emailId:{
        type: String,
        required: true,
    },
    
},{
    timestamps: true
})

module.exports = mongoose.model("User",UserSchema);
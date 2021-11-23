const mongoose = require("mongoose");

const insSch = new mongoose.Schema({

    projectId:{
        type: String,
        required: true,
        unique: true
    },
    studentId:{
        type: String,
        required: true,
        unique: true
    },
    isAccepted: {
        type: Boolean,
        required: true
    },
    dateOfEntry: String,
    dateOfExit : String
});

const x = mongoose.model("Inscriptions", insSch );
module.exports = x;

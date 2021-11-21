const mongoose = require("mongoose");

const userSch = new mongoose.Schema({

    mail:{
        type: String,
        required: true,
        unique: true
    },
    identification:{
        type: String,
        required: true,
        unique: true
    },
    completeName: {
        type: String,
        required: true
    },
    passwdHash: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

const x = mongoose.model("User", userSch );
module.exports = x;

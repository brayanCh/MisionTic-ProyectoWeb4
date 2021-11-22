const mongoose = require("mongoose");

const proySch = new mongoose.Schema({

    nameProyect:{
        type: String,
        required: true,
        unique: true
    },
    generalGoals:{
        type: String,
        required: true,
    },
    specificGoals: String,

    budget:{
        type: Number,
        required: true
    },
    startingDate:{
        type: String,
        require: true
    },
    endline{
        type: String,
        require: true
    },
    idLeader: {
        type: Number,
        required: true
    },
    nameLeader: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    stage:{
        type: String,
        required: true
    }
})

const x = mongoose.model("Proyect", proySch );
module.exports = x;

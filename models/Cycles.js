const mongoose = require('mongoose')

const cycleSchema = new mongoose.Schema({
    model: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    gears: {
        type: Number,
    },
    colour: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
})

const Cycles = mongoose.model('cycles', cycleSchema)
module.exports = Cycles
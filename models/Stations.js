const mongoose = require('mongoose')

const stationSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    pin: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true,
        unique: true
    }
})

const Stations = mongoose.model('stations', stationSchema)
module.exports = Stations

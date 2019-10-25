const mongoose = require('mongoose')

const activeCycleSchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stations',
        required: true,
    },
    locationCode: {
        type: Number,
        required: true,
    },
    cycles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cycles',
        require: true
    },
    cycleModel: {
        type: String,
        require: true
    },
    available: {
        type: Number,
        require: true
    },

})
const AvailableCycles = mongoose.model('availableCycles', activeCycleSchema)
module.exports = AvailableCycles
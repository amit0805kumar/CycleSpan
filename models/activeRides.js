const mongoose = require('mongoose')

const activeRideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    pickupLocationCode: {
        type: Number,
        required: true
    },
    cycleModel: {
        type: String,
        required: true
    },
    pickupTime: {
        type: Date,
        required: true
    },
    rideId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const ActiveRides = mongoose.model('activerides', activeRideSchema)
module.exports = ActiveRides
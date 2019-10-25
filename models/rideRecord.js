const mongoose = require('mongoose')

const rideRecordSchema = new mongoose.Schema({
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
        required: true
    },
    dropLocationCode: {
        type: Number,
        required: true
    },
    dropTime: {
        type: Date,
        required: true
    },
    totalTime: {
        type: Date,
        required: true
    },
    fare: {
        type: Fare,
        required: true
    }
})

const RideRecord = mongoose.model('activerides', rideRecordSchema)
module.exports = RideRecord
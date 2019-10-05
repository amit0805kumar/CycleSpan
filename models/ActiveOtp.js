const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    otp: {
        type: Number,
        require: true
    }
})

var ActiveOtp = mongoose.model('activeOtp', otpSchema)
module.exports = ActiveOtp
const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    location:
    {
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
        }
    }
    ,
    social: {
        youtube: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var Profile = mongoose.model('profile', ProfileSchema)
module.exports = Profile
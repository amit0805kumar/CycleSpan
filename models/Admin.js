const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

var Admin = mongoose.model('admin', adminSchema)
module.exports = Admin
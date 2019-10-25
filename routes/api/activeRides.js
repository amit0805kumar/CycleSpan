const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const adminAuth = require('../../middleware/adminAuth')
const { check, validationResult } = require('express-validator')
const AvailableCycles = require('../../models/AvailableCycles')

// @route POST api/activeRide/accept
// @desc To accept the otp and activate the ride
// @access Private user
router.post('/', async (req, res) => {
    try {

    } catch (error) {

    }
})

module.exports = router
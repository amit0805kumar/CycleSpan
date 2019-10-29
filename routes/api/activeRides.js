const express = require('express')
const router = express.Router()
const RideRecord = require('../../models/rideRecord')
const auth = require('../../middleware/auth')
const otpAuth = require('../../middleware/otpAuth')
const adminAuth = require('../../middleware/adminAuth')
const { check, validationResult } = require('express-validator')
const AvailableCycles = require('../../models/AvailableCycles')
const ActiveRides = require('../../models/activeRides')
const Users = require('../../models/Users')
const ActiveOtp = require('../../models/ActiveOtp')

// @route POST api/activeRide/accept
// @desc To accept the otp and activate the ride
// @access Private user
router.post('/accept', async (req, res) => {
    try {


        const otp = req.body.otp
        const activeOtp = await ActiveOtp.findOne({ otp: otp })
        if (!activeOtp) {
            return res.status(401).json({ message: 'No Otp found' })
        }

        const user_id = activeOtp.user
        const { name } = await Users.findById({ _id: user_id })

        const {
            locationCode,
            cycleModel,
        } = req.body
        const date = new Date()
        const total = await RideRecord.find()
        const rideId = 'cyclespan' + (total.length + 1)

        const activeSchema = {
            user: user_id,
            userName: name,
            pickupLocationCode: locationCode,
            cycleModel: cycleModel,
            pickupTime: date,
            rideId: rideId
        }
        const activeRides = new ActiveRides(activeSchema)
        await ActiveOtp.findOneAndRemove({ otp: otp })
        await activeRides.save()
        res.json(activeRides)

    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})



// @route POST api/activeRide/complete
// @desc To complete the ride
// @access Private user
router.post('/complete', [
    check('rideId', 'Please enter your ride Id').not().isEmpty()
], async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).json({ errors: error.array() })
    }

    try {
        //Body param
        const ride = await ActiveRides.findOneAndRemove({ rideId: req.body.rideId })
        if (!ride) {
            res.status(401).json({ message: 'Sorry, No ride found on this id' })
        }
        const date = new Date()
        const recordSchema = {}
        recordSchema.user = ride.user
        recordSchema.userName = ride.userName
        recordSchema.pickupLocationCode = ride.pickupLocationCode
        recordSchema.cycleModel = ride.cycleModel
        recordSchema.pickupTime = ride.pickupTime
        recordSchema.rideId = ride.rideId
        //Body param
        recordSchema.dropLocationCode = req.body.dropLocationCode
        recordSchema.dropTime = date

        const calculatedTimeDiff = (date.getTime() - ride.pickupTime.getTime()) / (1000 * 3600)

        const fare = calculatedTimeDiff * 10

        recordSchema.totalTime = parseFloat(calculatedTimeDiff.toFixed(2))
        recordSchema.fare = parseFloat(fare.toFixed(2))

        const recordData = new RideRecord(recordSchema)
        await recordData.save()
        res.json(recordData)

    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})
module.exports = router
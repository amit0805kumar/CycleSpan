const express = require('express')
const router = express.Router()
const adminAuth = require('../../middleware/adminAuth')
const { check, validationResult } = require('express-validator')
const Stations = require('../../models/Stations')

// @route POST api/stations
// @desc To add cycles
// @access Private admin

router.post('/', [adminAuth, [
    check('address', 'Enter the address').not().isEmpty(),
    check('pin', 'Enter the pin').not().isEmpty(),
    check('country', 'Enter the country').not().isEmpty(),
    check('state', 'Enter the state').not().isEmpty(),
    check('code', 'Enter the code').not().isEmpty(),

]], async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const {
        address,
        pin,
        city,
        state,
        country,
        code,
    } = req.body
    var locationDetails = {}
    locationDetails.address = address
    locationDetails.pin = pin
    locationDetails.country = country
    locationDetails.code = code
    locationDetails.state = state

    if (city) locationDetails.city = city

    try {

        const location = new Stations(locationDetails)
        await location.save()
        res.json(location)

    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})


// @route DELETE api/station
// @desc To delete station
// @access Private admin

router.delete('/:code', adminAuth, async (req, res) => {

    try {
        var station = await Stations.findOneAndRemove({ code: req.params.code })
        if (station == null) {
            return res.status(401).json({ "message": "Station not found" })
        }
        // console.log(stat)
        res.json({ message: 'Station removed' })
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }

})

// @route GET api/station
// @desc To get all stations
// @access public
router.get('/', async (req, res) => {
    try {
        const stations = await Stations.find()
        if (stations == null) return res.status(401).json({ message: "No station found" })

        res.json(stations)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})

// @route GET api/station/:code
// @desc To get station by id
// @access Private admin
router.get('/:code', adminAuth, async (req, res) => {
    try {
        const station = await Stations.findOne({ code: req.params.code })
        if (station == null) return res.status(401).json({ message: "No station found" })

        res.json(station)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})

module.exports = router


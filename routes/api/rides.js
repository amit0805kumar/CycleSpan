const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const adminAuth = require('../../middleware/adminAuth')
const { check, validationResult } = require('express-validator')
const AvailableCycles = require('../../models/AvailableCycles')




// @route POST api/rides/add
// @desc To add available cycles
// @access Private admin

router.post('/add', [adminAuth, [
    check('location', 'Please select the location').not().isEmpty(),
    check('locationCode', 'Please select the location code').not().isEmpty(),
    check('cycles', 'Please select the cycles').not().isEmpty(),
    check('cycleModel', 'Please select the cycleModel').not().isEmpty(),
    check('available', 'Please select the number of cycle').not().isEmpty(),
]], async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    try {
        const availableData = {}
        availableData.location = req.body.location
        availableData.locationCode = req.body.locationCode
        availableData.cycles = req.body.cycles
        availableData.cycleModel = req.body.cycleModel
        availableData.available = req.body.available

        const data = await AvailableCycles.findOne({ location: availableData.location })
        if (!data) {
            const available = new AvailableCycles(availableData)
            await available.save()
            res.json(available)
        } else {
            const data2 = await AvailableCycles.findOne({ cycles: availableData.cycles })
            if (!data2) {
                const available = new AvailableCycles(availableData)
                await available.save()
                res.json(available)
            } else {
                data2.available = data2.available + parseInt(availableData.available);
                await data2.save()
                res.json(data2)
            }
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})

// @route POST api/rides/updates
// @desc To update the cycles (inc or dec)
// @access Private admin

router.put('/update', [adminAuth, [
    check('locationCode', 'Please select the location code').not().isEmpty(),
    check('cycleModel', 'Please enter the cycle model').not().isEmpty(),
    check('action', 'Please select the select').not().isEmpty()
]], async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    try {
        const data = await AvailableCycles.findOne({ locationCode: req.body.locationCode, cycleModel: req.body.cycleModel })
        if (req.body.action === 'inc') {
            if (req.body.count) {
                data.available += parseInt(req.body.count)
            } else {
                data.available += 1
            }
        } else if (req.body.action == 'dec') {
            if (req.body.count) {
                data.available -= parseInt(req.body.count)
            } else {
                data.available -= 1
            }
        }
        await data.save()
        res.json(data)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})


module.exports = router
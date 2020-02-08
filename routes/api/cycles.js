const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const adminAuth = require('../../middleware/adminAuth')
const { check, validationResult } = require('express-validator')
const Cycles = require('../../models/Cycles')

// @route POST api/cycles
// @desc To add cycles
// @access Private admin

router.post('/', [adminAuth, [
    check('model', 'Enter the model').not().isEmpty(),
    check('company', 'Enter the company').not().isEmpty(),
    check('details', 'Enter the details').not().isEmpty(),
    check('colour', 'Enter the cycle colour').not().isEmpty(),
    check('gender', 'Enter the Gender').not().isEmpty(),

]], async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const {
        model,
        company,
        details,
        colour,
        gender,
        gears
    } = req.body
    var cycleDetails = {}
    cycleDetails.model = model
    cycleDetails.company = company
    cycleDetails.details = details
    cycleDetails.colour = colour
    cycleDetails.gender = gender

    if (gears) cycleDetails.gears = gears

    try {

        const cycle = new Cycles(cycleDetails)
        await cycle.save()
        res.json(cycle)

    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})


// @route DELETE api/cycles
// @desc To delete cycles
// @access Private admin

router.delete('/', [adminAuth, [
    check('model', 'Please enter the model').not().isEmpty()
]], async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    try {
        var cycle = await Cycles.findOneAndRemove({ model: req.body.model })
        if (cycle == null) {
            return res.status(401).json({ "message": "Cycle not found" })
        }
        res.json({ message: 'Cycle removed' })
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }

})

// @route GET api/cycles
// @desc To get all cycles
// @access Public
router.get('/', async (req, res) => {
    try {
        const cycle = await Cycles.find()
        if (cycle == null) return res.status(401).json({ message: "No cycle found" })

        res.json(cycle)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})

// @route GET api/cycles/:model
// @desc To get cycle by model
// @access Private admin
router.get('/:model', adminAuth, async (req, res) => {
    try {
        const cycle = await Cycles.findOne({ model: req.params.model })
        if (cycle == null) return res.status(401).json({ message: "No cycle found" })

        res.json(cycle)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Server error')
    }
})


module.exports = router


const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const ActiveOtp = require('../../models/ActiveOtp')
const auth = require('../../middleware/auth')
const otplib = require('otplib')
const config = require('config')
const { authenticator } = require('otplib')
const otpSecret = config.get('otpSecret')


// @route GET api/active/getOtp
// @desc To generate otp for the user
// @access Private
router.get('/getOtp', auth, async (req, res) => {
    try {


        let object = await ActiveOtp.findOne({ user: req.user.id })
        if (object == null) {
            token = authenticator.generate(otpSecret);
            object = {
                user: req.user.id,
                otp: token
            }
            const active = new ActiveOtp(object)
            object = await active.save()
        }
        // const isValid = authenticator.check(token, otpSecret);
        res.json(object);

    } catch (error) {
        console.log(error.message)
        res.status(400).send('server error')
    }
})

// @route GET api/active/cancelOtp
// @desc To remove the OTP
// @access Private

router.delete('/cancelOtp', auth, async (req, res) => {

    try {
        await ActiveOtp.findOneAndRemove({ user: req.user.id })
        res.json({ message: 'Otp cancelled' })
    } catch (error) {
        console.log(error.message)
        res.status(400).send('server error')
    }

})

module.exports = router 
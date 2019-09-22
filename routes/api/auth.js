const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator');

const User = require('../../models/Users')
const auth = require('../../middleware/auth')

// @route GET api/auth
// @desc to get user from
// @access Private
router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

// @route POST api/auth
// @desc to login user and get token
// @access Public
router.post('/', [
    check('email', 'Enter a valid email')
        .not().isEmpty(),
    check('password', 'Password is required').exists()
], async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                errors: [{
                    message: 'Invalid Credenitals'
                }]
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                errors: [{
                    message: 'Invalid Credenitals'
                }]
            })
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtsecret'),
            { expiresIn: 36000 },
            (err, token) => {
                if (err) {
                    throw err
                }
                res.json({ token })
            }
        )

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})


module.exports = router 
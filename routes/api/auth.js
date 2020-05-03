const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator');

const User = require('../../models/Users')
const auth = require('../../middleware/auth')
const adminAuth = require('../../middleware/adminAuth')
const Admin = require('../../models/Admin')

// @route GET api/auth
// @desc to get user from token
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
// @route GET api/auth/users
// @desc to get all users
// @access Private admin
router.get('/users', adminAuth, async (req, res) => {

    try {
        const users = await User.find().select('-password')
        if(!users){
            res.status(401).send('No users found')
        }
        res.json(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})
// @route GET api/auth/admins
// @desc to get add admins
// @access Private admin
router.get('/admins', adminAuth, async (req, res) => {

    try {
        const admins = await Admin.find()
        if(!admins){
            res.status(401).send('No admin found')
        }
        res.json(admins)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})


// @route GET api/auth/checkAdmin
// @desc to check admin or not
// @access Private
router.get('/checkAdmin', auth, async (req, res) => {

    try {
        const adminAllow = await Admin.findOne({ user: req.user.id })
        res.json(adminAllow)
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
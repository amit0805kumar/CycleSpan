const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('config')
const User = require('../../models/Users')


// @route POST api/users
// @desc To register a user
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid email').not().isEmpty(),
    check('password', 'Please enter a valid password')
        .isLength({ min: 6 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                errors: [{
                    message: 'User already exixts'
                }]
            })
        }

        user = new User({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()

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
                    throw err;
                }
                res.json({ token });
            }
        )

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const Profile = require('../../models/Profiles')
const User = require('../../models/Users')
const Admin = require('../../models/Admin')
const RideRecord = require('../../models/rideRecord')
const auth = require('../../middleware/auth')
const adminAuth = require('../../middleware/adminAuth')

// @route POST api/profile
// @desc To create or update user profile
// @access Private
router.post(
    '/',
    [
        auth,
        [
            check('gender', 'Please select the gender').not().isEmpty(),
            check('dob', 'Please enter a valid date').not().isEmail(),
            check('number', 'Please enter a valid number').isLength({ min: 10, max: 10 }),
            check('address', 'Enter the address').not().isEmpty(),
            check('pin', 'Enter the pin').not().isEmpty(),
            check('state', 'Enter the state').not().isEmpty(),
            check('country', 'Enter the country').not().isEmpty(),
        ]
    ], async (req, res) => {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        let {
            gender,
            dob,
            number,
            address,
            pin,
            state,
            country,
            youtube,
            facebook,
            instagram
        } = req.body


        const profileFelds = {}
        profileFelds.user = req.user.id
        if (gender) profileFelds.gender = gender
        if (dob) profileFelds.dob = dob
        if (number) profileFelds.number = number

        profileFelds.location = {}
        if (address) profileFelds.location.address = address
        if (pin) profileFelds.location.pin = pin
        if (state) profileFelds.location.state = state
        if (country) profileFelds.location.country = country

        profileFelds.social = {}

        if (youtube) profileFelds.social.youtube = youtube
        if (facebook) profileFelds.social.facebook = facebook
        if (instagram) profileFelds.social.instagram = instagram

        try {
            let profile = await Profile.findOne({ user: req.user.id })

            //Update
            if (profile) {
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFelds },
                    { new: true }
                )
                res.json(profile)
            } else {
                //Createing Profile
                profile = new Profile(profileFelds)
                await profile.save()
                res.json(profile)
            }

        } catch (error) {
            console.log(error.message)
            res.status(400).send('server error')
        }

    })

// @route GET api/profile/user/:user_id
// @desc To get a user from userId
// @access Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['name'])

        if (!profile) {
            return res.status(400).json({ message: 'Profile not found' })
        }
        res.json(profile)
    } catch (error) {
        if ((error.kind = 'ObjectId')) {
            return res.status(400).json({ message: 'Profile not found' })
        }
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})
// @route GET api/profile/me
// @desc To get my profile
// @access Private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name'])

        if (!profile) {
            return res.status(400).json({ message: 'Profile not found' })
        }
        res.json(profile)
    } catch (error) {
        if ((error.kind = 'ObjectId')) {
            return res.status(400).json({ message: 'Profile not found' })
        }
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

// @route Delete api/profile/
// @desc To delete a user and it's profile
// @access Private

router.delete('/', auth, async (req, res) => {
    try {

        //Remove Profile
        await Profile.findOneAndDelete({ user: req.user.id })
        //Remove User
        await User.findOneAndDelete({ _id: req.user.id })
        //Remove rides
        await RideRecord.deleteMany({ user: req.user.id })

        res.json({ message: "User deleted" })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error')
    }
})



// @route POST api/profile/allowAdmin
// @desc To make an admin
// @access Private admin

router.post("/allowAdmin/:user_id", adminAuth, async (req, res) => {

    try {
        const { user_id } = req.params
        const redundantFlag = await Admin.findOne({
            user: user_id
        })
        if(redundantFlag){
          return  res.status(400).json({ message: 'You are already an Admin!' })
        }
        let adminData = {}
        adminData.user = user_id
        let userData = await User.findOne({ _id: user_id })
        adminData.name = userData.name

        const admin = new Admin(adminData)
        await admin.save()
        res.json(admin)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error')
    }

})



// @route Delete api/profile/removeAdmin
// @desc To delete access admin allowance
// @access Private admin

router.delete('/removeAdmin/:user_id', adminAuth, async (req, res) => {

    try {
        const { user_id } = req.params
        const allAdmin = await Admin.find()
        if (allAdmin.length <= 1) {
            return res.status(400).json({ message: 'Sorry, You are the only admin' })
        }
        await Admin.findOneAndRemove({ user: user_id })
        res.json({ message: 'Authorization removed' })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error')
    }
})

module.exports = router
const ActiveOtp = require('../models/ActiveOtp')
module.exports = async function (req, res, next) {
    const otp = req.locationCode
    console.log(otp)
    const user_id = await ActiveOtp.findOne({ otp: otp })
    if (!otp) {
        return res.status(401).json({ message: 'No Otp found' })
    }
    res.user = user_id
    next()
}
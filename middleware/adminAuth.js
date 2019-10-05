const jwt = require('jsonwebtoken');
const config = require('config');
const Admin = require('../models/Admin')

module.exports = async function (req, res, next) {
    //Get the token from header
    const token = req.header('x-auth-token');

    //check if no token

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied.' });
    }
    //verify the token
    try {
        const decoded = jwt.verify(token, config.get('jwtsecret'));
        const user = decoded.user;
        const adminAllow = await Admin.findOne({ user: user.id })
        if (!adminAllow) {
            return res.status(401).json({ message: 'You are not authorized' })
        }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

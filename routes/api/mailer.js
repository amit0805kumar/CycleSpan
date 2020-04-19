const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const config = require('config')
router.post('/', async (req, res) => {
    let {
        sub, body, receiver
    } = req.body


    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'cyclespan.ltd@gmail.com',
            pass: config.get('epass')
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: 'cyclespan.ltd@gmail.com',
        to: receiver,
        subject: sub,
        html: body
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err)
            res.send('Email Error')

        }
        else {
            res.send('Email Sent')
        }
    })

})

module.exports = router
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
            user: 'greatamitkumar042@gmail.com',
            pass: 'StarLord'
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: 'greatamitkumar042@gmail.com',
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
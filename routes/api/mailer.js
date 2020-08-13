const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const config = require('config')
router.post('/', async (req, res) => {
    let {
        sub, body, receiver
    } = req.body


    let transporter = nodemailer.createTransport({
         host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
         ciphers: "SSLv3",
        },
        auth: {
            user: "amit0805kumar@outlook.com",
            pass: config.get("epass"),
    },
    })
    let mailOptions = {
            from: '"Amit Kumar" <amit0805kumar@outlook.com>', // sender address (who sends)
            to: receiver, // list of receivers (who receives)
            subject: sub, // Subject line
            html: body, // html body
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
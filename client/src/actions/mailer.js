import axios from 'axios'

export const mailer = async (sub, html, receiver) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({
            sub: sub,
            body: html,
            receiver: receiver
        })

        const res = await axios.post('/api/mailer', body, config)
        console.log(res.data)   
    } catch (error) {
        console.log('Email error')
    }
}
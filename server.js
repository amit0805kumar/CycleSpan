const express = require('express')
const app = express()
const connectDb = require('./config/db')

connectDb();


//Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/active', require('./routes/api/active'))

const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
    return res.send('API is running')
})

app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
});
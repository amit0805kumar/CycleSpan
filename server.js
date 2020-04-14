const express = require('express')
const app = express()
const http = require("http");
const connectDb = require('./config/db')
const socketIo = require("socket.io")
const axios = require("axios");
const cors = require('cors')
connectDb();


//Init Middleware
app.use(express.json({ extended: false }));

app.use(cors())

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/active', require('./routes/api/active'))
app.use('/api/cycles', require('./routes/api/cycles'))
app.use('/api/stations', require('./routes/api/stations'))
app.use('/api/rides', require('./routes/api/rides'))
app.use('/api/activeRide', require('./routes/api/activeRides'))
app.use('/api/mailer', require('./routes/api/mailer'))

const PORT = process.env.PORT || 5000
const server = http.createServer(app);
const io = socketIo(server) 

// io.on("connection", socket => {
//     console.log("New client connected")
//     socket.on("disconnect", () => console.log("Client disconnected"));
//   });

server.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
});





app.get('/',function (req, res) {
  return res.send('API is running')
})

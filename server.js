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

io.on("connection", socket => {
    console.log("New client connected"), setInterval(
      () => getApiAndEmit(socket),
      10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

server.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
});



const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      "https://api.darksky.net/forecast/5c42a6daa57f945abc433cd3236c3977/43.7695,11.2558"
    ); // Getting the data from DarkSky
    socket.emit("FromAPI", res.data.currently.temperature); // Emitting a new message. It will be consumed by the client
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};


app.get('/',function (req, res) {
  return res.send('API is running')
})

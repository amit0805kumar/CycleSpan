const express = require('express')
const app = express()
const path = require('path')
const connectDb = require('./config/db')
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

//Serve static assets in production
if(process.env.NODE_ENV === "production"){
  //set static folder
 app.use(express.static('client/build'));

 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });
}

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`)
});


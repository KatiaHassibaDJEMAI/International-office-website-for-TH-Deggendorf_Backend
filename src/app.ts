
import express = require('express')
const cors = require('cors');
import './db/mongoose'

import roomRoute from './routes/room.route'
import userRoute from './routes/user.route'
// import eventRouter from './routers/event.router'

const port = process.env.PORT || 3000
const hostname = process.env.HOST || "localhost"

const app = express()
app.use(express.json())
app.use(cors());

var server = require('http').Server(app);
// var server = require('https').Server(options, app);

var io = require('socket.io')(server, {
  cors: { origin: "*" }
});

app.use("/api/", roomRoute)
app.use("/api/", userRoute)
// app.use("/api/", eventRouter)

app.get('/', async (request: express.Request, response: express.Response) => {
    response.send('Welcome to MIT-THD Project GET Call')
})

app.post('/', async (request: express.Request, response: express.Response) => {
    response.send('Welcome to MIT-THD Project POST Call')
})


server.listen(port, () => {
    console.log(`Server listening at http://${hostname}:${port}`)
})

io.on('connection', (socket) => {
    console.log('new connection');

    socket.emit('test', 'test event')

});
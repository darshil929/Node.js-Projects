const http = require('http')

const express = require(`express`)

const app = express()

const server = http.createServer(app)

const io = require('socket.io')(server, { cors: { origin: "*"}})// so it wont cause any issues

app.set('view engine', 'ejs') 

app.get('/home', (req, res) => {
    res.render('home')
});

server.listen(3001, () => {
    console.log("Server running...")
});

io.on('connection', (socket) => {
    console.log("User Connected:" + socket.id)
        socket.on("message", (data) => { 
            socket.broadcast.emit("message", data)
        });


}) 
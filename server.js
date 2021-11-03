const express = require('express');
const { connect } = require('http2');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 5000;
const io = require('socket.io')(http, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
})

io.set('origins', '*:*');

app.use('/ckeditor', express.static('ckeditor'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html' )
})

io.on('connection', (socket) => {
    console.log(`new console ${socket.id}`)
    socket.on('distribution', (msg) =>{       
        console.log(msg)
        io.emit('distribution', msg)
    })
})

http.listen(PORT, () => {
    console.log('listemPort', PORT)
})

app.get('/style', (req, res) => {
    res.sendFile(__dirname+ '/css/styled.css')
})

app.get('/js', (req, res) => {
    res.sendFile(__dirname+  '/js/mains.js')
}) 


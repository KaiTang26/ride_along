// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('reply', function(msg) {
    io.emit('reply', msg)
    // socket.broadcast.emit('reply')
    // , {
    //     message: data
    //   });
  })

  socket.on('disconnect', function (){
    console.log('user disconnected');
  })
  // socket.on('new message', function (data) {
  //   console.log(data+" from server");
  //   socket.broadcast.emit('new message', {
  //     username: socket.username,
  //     message: data
  //   });
  // });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});



// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//json parser
app.use(bodyParser.json())
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))
// Serve our api
.use('/api', require('./api'))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;

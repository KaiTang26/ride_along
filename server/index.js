const app = require('./app');
const PORT = process.env.PORT || 8000;

const server = require ('http').createServer();
const io = require("socket.io")(server, {

})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

io.on('connection', function (client){
  console.log('works');
})

server.listen(3001);

module.exports=app;

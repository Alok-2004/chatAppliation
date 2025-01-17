import express from 'express';
import sockerIo from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);

// Intiate socket.io and attach this http server
const io = sockerIo(server);
app.use(express.static('public'));

const user = new set()
io.on("Connection", (socket) => {
    console.log("New Connection");
    //Handle users when they will Join the chat

    //Handle incoming chat messages

    //HAndel user disconnection
})
    
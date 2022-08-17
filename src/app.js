const express = require("express");
const app = express();

const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "https://live-chat-socket-io-client.vercel.app/",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    // console.log(`User Connected: ${socket.id}`);
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        // console.log("User Disconnected", socket.id);
    });
});

app.get("/", (req, res) => {
    res.send("La página de Inicio.");
});

module.exports = app;
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require("./config/dbConfig.js")
const auth = require('./middlewares/auth.js')
const authenticate = require('./routes/auth.js');
const users = require('./routes/users.js')


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;
connectDB()

app.use('/', authenticate);
app.use('/users', auth, users)


const expressServer = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})


const io = new Server(expressServer, {
    cors: {
        origin: process.env.CLIENT_URL
    }
})
let onlineUsers = [];

io.on("connection", (socket) => {
    socket.on("addUserId", (id) => {
        onlineUsers.push({ userId: id, socketId: socket.id });
        console.log("added user");
    });
    io.emit("onlineUsers", onlineUsers);

    socket.on("sendMessage", (data) => {
        const userOnline = onlineUsers.find(user => user.userId === data.userId);
        const message = { sender : data.userId, text : data.sendMessages}
        if(userOnline) {
            io.to([userOnline.socketId, socket.id]).emit("message", message);
        }else {
            socket.emit("message", message);
        }
       

    })

    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter((users) => users.socketId !== socket.id);
        console.log("removed user");
        io.emit("onlineUsers", onlineUsers);
    })
    
})
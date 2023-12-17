const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const {Server} = require('socket.io');
const connectDB = require("./config/dbConfig.js")
const auth = require('./routes/auth.js');


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;
connectDB()

app.use('/', auth)


const expressServer = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

// const io =new Server(expressServer, {
//     cors : {
//         origin : process.env.CLIENT_URL
//     }
// })

// io.on("connection", (socket) => {
//     console.log(`Connected to ${socket.id}`);

//     socket.on("disconnect", () => {
//         console.log(`disconnected ${socket.id}`);
//     })
// })
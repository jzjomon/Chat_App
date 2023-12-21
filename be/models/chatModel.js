const mongoose = require("mongoose");

const chatShema = mongoose.Schema({
    users : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "users",
    }],
    lastMessage : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "messages"
    }
});

const chatModel = mongoose.model("chats" , chatShema);

module.exports = chatModel;
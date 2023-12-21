const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    chatId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "chats"
    },
    text : {
        type : String
    },
}, {
    timestamps : true,
})

const messageModle = mongoose.model("messages", messageSchema);

module.exports = messageModle;
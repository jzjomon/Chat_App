const USER = require('../models/userModal.js');
const CHAT = require('../models/chatModel.js');
const MESSAGES = require('../models/messageModel.js')

const getUsers = (req, res) => {
    try {
        USER.find({ _id: { $ne: req.userId } }, { password: 0 }).then((result) => {
            res.status(200).json({ message: "success", data: result });
        }).catch((err) => {
            res.status(400).json({ message: "User not found" })
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong !" });
    }
}

const getMessages = async (req, res) => {
    try {
        if (!req.body.currentChatUser) return res.status(200).json({ message: "dont have a curret chat user" });
        const currentChater = req.body.currentChatUser;
        const exist = await CHAT.findOne({ users: { $all: [currentChater._id, req.userId] } });
        if (!exist) {
            const create = await CHAT({ users: [currentChater._id, req.userId] }).save();
            if (!create) res.status(400).json({ message: "cannot create chat" });
            res.status(200).json({ message: "success", chatId: create._id });
        } else {
            const messages = await MESSAGES.find({ chatId: exist._id });
            if (!messages) res.status(400).json({ message: "cannot find messages" });
            res.status(200).json({ message: "success", data: messages, chatId: exist._id });
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong !" });
    }
}

const sendMessage = async (req, res) => {
    try {
        if (!req.body.chatId || !req.body.text || !req.body.sender) return res.status(400).json({ message: "details not found" });
        const { sender, chatId, text } = req.body;
        const saveMessage = await MESSAGES({ sender, chatId, text }).save();
        if (!saveMessage) return res.status(400).json({ message: "cannot save message" });
        CHAT.updateMany(
            {
                users: { $all: [sender, req.userId] },
            },
            {
                lastMessage : saveMessage._id
            }
        ).then((result) => {
            res.status(200).json({message : "success"});
        }).catch((err) => {
            res.status(400).json({message : "something went wrong"});
        });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong !" });
    }
}
module.exports = { getUsers, getMessages, sendMessage }
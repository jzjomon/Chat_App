const express = require('express');
const router = express.Router();
const { getUsers, getMessages, sendMessage } = require('../controllers/users.js')

router.get('/getUsers', getUsers);
router.post('/getMessages', getMessages)
router.post("/sendMessage", sendMessage)

module.exports = router;
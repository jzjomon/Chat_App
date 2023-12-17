const USER = require('../models/userModal.js');
const bcrypt = require('bcrypt');


const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({message : "validation failed"});
        const exist = await USER.findOne({ email });
        if (!exist) return res.status(400).json({message : "You don't have an account. Please sign up !"});
        bcrypt.compare(password, exist.password, (err, result) => {
            if (err) return res.status(400).json({message : "bcrypt compare failed"});
            if (!result) return res.status(400).json({message : "incorrect password"});
            res.status(200).json({message : "success", data : exist});
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong !" });
    }
}

const signUp = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        if (firstname && lastname && email && password) {
            const exist = await USER.findOne({ email: email });
            if (exist) return res.status(400).json({ message: "allready have an account !" });
            bcrypt.hash(password, parseInt(process.env.SALT), async (err, hash) => {
                if (err) return res.status(400).json({ message: "hashing error" });
                const result = await USER({ firstname, lastname, email, password: hash }).save();
                if (!result) return res.status(400).json({ message: "cannot save the user details" });
                res.status(200).json({ message: "successfully saved the user details" });
            })
        } else {
            return res.status(400).json({ message: "validation error" });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong !" });
    }
}

module.exports = { signIn, signUp }
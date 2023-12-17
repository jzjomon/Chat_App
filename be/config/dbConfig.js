const mongoose = require('mongoose');

module.exports = connectDB = async () => {
    try {
        const res = await mongoose.connect('mongodb://localhost:27017/Chat-App');
        if (res) return console.log("Connected to MongoDB");
        console.log("Cannot connect to MongoDB");
    } catch (error) {
        console.log("Mongoose error: " + error);
    }

};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please enter username"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    }

},{minimize: false})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;
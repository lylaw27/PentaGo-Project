const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    imagefile: String,
    image_id: String,
    title: String,
    subtitle: String,
    article: String,
    uploadDate: String,
    category: String
})

const blogModel = mongoose.model('listings',blogSchema);

module.exports = blogModel;
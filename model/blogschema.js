const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    imagefile: [String],
    image_id: [String],
    videoUrl: String,
    title: String,
    subtitle: String,
    article: String,
    timestamp: Date,
    uploadDate: String,
    category: String
})

const blogModel = mongoose.model('listings',blogSchema);

module.exports = blogModel;
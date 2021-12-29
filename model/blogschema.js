const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    imagefile: [String],
    image_id: [String],
    videoUrl: String,
    title: String,
    subtitle: String,
    article: Object,
    timestamp: Date,
    uploadDate: String,
    category: String, 
},{minimize: false})

const blogModel = mongoose.model('listings',blogSchema);

module.exports = blogModel;
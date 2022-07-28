const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const igpostSchema = new Schema({
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

const igpostModel = mongoose.model('igpost',igpostSchema);

module.exports = igpostModel;
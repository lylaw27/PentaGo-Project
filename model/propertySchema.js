const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    imagefile: String,
    title: String,
    address: String,
    price: String,
    area: String,
    bedroom: String,
    bathroom: String,
    description: String,
    feature: [String],
    image_id: String
})

const propertyModel = mongoose.model('listings',propertySchema);

module.exports = propertyModel;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wonderSchema = new Schema({
    placeName: {type: String, required: true},
    description: {type: String},
    cardImageURL: {type: String},
    mainImageURL: {type: String},
    tourText: [String],
    tourURL: [String],
    // reviews: [reviewSchema]
}, {
    timestamps: true
});

const reviewSchema = new Schema ({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
});

module.exports = mongoose.model('Wonder', wonderSchema);
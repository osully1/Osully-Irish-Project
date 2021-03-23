const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wonderSchema = new Schema({
    placeName: {type: String, required: true},
    description: {type: String},
    descriptionMain: {type: String},
    cardImageURL: {type: String},
    mainImageURL: {type: String},
    tourText1: {type: String},
    tourText2: {type: String},
    tourText3: {type: String},
    tourURL1: {type: String},
    tourURL2: {type: String},
    tourURL3: {type: String},
    isNature: {type: Boolean},
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
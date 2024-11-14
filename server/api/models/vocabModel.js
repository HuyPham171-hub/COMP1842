const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VocabSchema = new Schema(
    {
        english: {
            type: String,
            required: 'English word cannot be blank'
        },
        german: {
            type: String,
            required: 'German word cannot be blank'
        },
        dutch: {
            type: String,
            required: 'Dutch word cannot be blank'
        }
    },
    { collection: 'vocab3'}
);

module.exports = mongoose.model('Vocab', VocabSchema);
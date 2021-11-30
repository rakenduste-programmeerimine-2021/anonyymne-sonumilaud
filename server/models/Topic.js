const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    name: { type: String, required: true }
});

mongoose.model('Topic', TopicSchema);
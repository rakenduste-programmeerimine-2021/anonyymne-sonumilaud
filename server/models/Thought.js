const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User');
const Topic = mongoose.model('Topic');

const ThoughtSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: User, required: true },
    topicsId: { type: mongoose.Types.ObjectId, ref: Topic },
    text: { type: String, required: true }
});

mongoose.model('Thought', ThoughtSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User');
const Topic = mongoose.model('Topic');

const ThoughtSchema = new Schema({
    user: { type: User.schema },
    topics: { type: Topic.schema },
    text: {
      type: String
    }
});

mongoose.model('Thought', ThoughtSchema);
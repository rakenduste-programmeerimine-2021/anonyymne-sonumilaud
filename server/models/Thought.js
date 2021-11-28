const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User');
const Topic = mongoose.model('Topic');

const ThoughtSchema = new Schema({
    user: { type: User.schema, ref: User },
    topics: { type: Topic.schema, ref: Topic },
    text: {
      type: String
    }
});

mongoose.model('Thought', ThoughtSchema);
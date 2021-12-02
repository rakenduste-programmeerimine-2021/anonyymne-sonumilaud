const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User');
const Topic = mongoose.model('Topic');

const ThoughtSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: User, required: true },
    topics: { type: mongoose.Types.ObjectId, ref: Topic },
    text: { type: String, required: true },
},{ timestamps: true });
mongoose.model('Thought', ThoughtSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Thought = mongoose.model('Thought');
const User = mongoose.model('User');

const ReactionSchema = new Schema({
    thought: { type: Thought.schema, ref: Thought },
    user: { type: User.schema, ref: User },
    emoji: { type: String }
});

mongoose.model('Reaction', ReactionSchema);
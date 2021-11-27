const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Thought = mongoose.model('Thought');
const User = mongoose.model('User');

const ReactionSchema = new Schema({
    thought: { type: Thought.schema },
    user: { type: User.schema },
    emoji: { type: String }
});

mongoose.model('Reaction', ReactionSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Thought = mongoose.model('Thought');
const User = mongoose.model('User');

const ReactionSchema = new Schema({
    thought: { type: mongoose.Types.ObjectId, ref: Thought, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: User, required: true },
    emoji: { type: String, required: true }
});

mongoose.model('Reaction', ReactionSchema);
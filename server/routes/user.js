const mongoose = require('mongoose');
const User = mongoose.model('User');

const helper = require('../helper');

module.exports = (router) => {
  router.get('/user', (req, res) => {
    User.find()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.get('/thought/find/:userId', (req, res) => {
    Thought.find({user: new mongoose.Types.ObjectId(req.params.userId)})
      .populate('user')
      .populate('topic')
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });
}
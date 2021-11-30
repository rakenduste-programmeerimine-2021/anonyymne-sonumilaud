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

  router.get('/thought/:userId', (req, res) => {
    User.findOne({_id: req.params.userId})
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });
}
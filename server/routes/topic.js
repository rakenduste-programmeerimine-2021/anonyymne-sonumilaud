const mongoose = require('mongoose');
const Topic = mongoose.model('Topic');

const helper = require('../helper');

module.exports = (router) => {
  router.get('/topic/:topicId', (req, res) => {
    Topic.findOne({id: req.params.topicId})
      .then(doc => {
        if (doc) {
          // send it to the user
        }
      })

    // not implemented
    res.sendStatus(501);
  });
}
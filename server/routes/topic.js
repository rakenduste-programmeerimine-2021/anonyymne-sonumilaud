const mongoose = require('mongoose');
const Topic = mongoose.model('Topic');

const helper = require('../helper');

module.exports = (router) => {
  router.get('/topic', (req, res) => {
    Topic.find()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  })
  router.get('/topic/:topicId', (req, res) => {
    Topic.findOne({_id: new mongoose.Types.ObjectId(req.params.topicId)})
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });
  router.get('/topic/name/:topicName', (req, res) => {
    Topic.findOne({name: req.params.topicName})
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });
  router.post('/topic/add', (req, res) => {
    const topic = new Topic({...req.body});
    topic.save()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

}
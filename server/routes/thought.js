const mongoose = require('mongoose');
const Thought = mongoose.model('Thought');
const Reaction = mongoose.model('Reaction');

const helper = require('../helper');

module.exports = (router) => {
  router.post('/thought/add', (req, res) => {
    const thought = new Thought(req.body);
    thought.save()
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.post('/thought/remove/:thoughtId', (req, res) => {
    Thought.findOne({id: req.params.thoughtId})
      .then(doc => {
        if (doc) {
          // check if user has permission to delete it then delete it
        }
      })
      .catch(err => helper.genericErrorHandler(err, res));

    // not implemented
    res.sendStatus(501);
  });

  router.post('/thought/edit/:thoughtId', (req, res) => {
    Thought.findOne({id: req.params.thoughtId})
      .then(doc => {
        if (doc) {
          // check if user has permission to edit it then edit it
        }
      })
      .catch(err => helper.genericErrorHandler(err, res));

    // not implemented
    res.sendStatus(501);
  });

  router.post('/thought/reaction/add/:thoughtId', (req, res) => {
    const reaction = new Reaction(req.body);
    reaction.save()
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.post('/thought/reaction/remove/:reactionId', (req, res) => {
    Reaction.findOne({id: req.params.reactionId})
      .then(doc => {
        if (doc) {
          // check if user has permission to delete it then delete it
        }
      })
      .catch(err => helper.genericErrorHandler(err, res));

    // not implemented
    res.sendStatus(501);
  });

  router.get('/thought/:thoughtId', (req, res) => {
    Reaction.findOne({id: req.params.thoughtId})
      .then(doc => {
        if (doc) {
          // send it to the user
        }
      })

    // not implemented
    res.sendStatus(501);
  });
}
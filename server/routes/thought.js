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
    // for now there is no permission checking. must be added later !!!
    Thought.findOneAndRemove({_id: req.params.thoughtId})
    .then(doc => {
      res.sendStatus(200);
    })
      .catch(err => helper.genericErrorHandler(err, res));

    // not implemented
    res.sendStatus(501);
  });

  router.post('/thought/edit/:thoughtId', (req, res) => {
    // for now there is no permission checking. must be added later !!!
    Thought.findOneAndUpdate({_id: req.params.thoughtId}, req.body)
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
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
    // for now there is no permission checking. must be added later !!!
    Reaction.findOneAndRemove({_id: req.params.reactionId})
    .then(doc => {
      res.sendStatus(200);
    })
      .catch(err => helper.genericErrorHandler(err, res));

    // not implemented
    res.sendStatus(501);
  });

  router.get('/thought/:thoughtId', (req, res) => {
    Reaction.findOne({_id: req.params.thoughtId})
      .then(doc => {
        if (doc) {
          // send it to the user
        }
      })

    // not implemented
    res.sendStatus(501);
  });
}
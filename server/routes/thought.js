const mongoose = require('mongoose');
const Thought = mongoose.model('Thought');
const Reaction = mongoose.model('Reaction');
const Topic = mongoose.model('Topic');

const helper = require('../helper');

module.exports = (router) => {
  router.get('/thought', (req, res) => {
    Thought.find()
      .populate('user')
      .populate('topic')
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.post('/thought/add', (req, res) => {
    const thought = new Thought({...req.body, user: new mongoose.Types.ObjectId(req.body.userId),topic: new mongoose.Types.ObjectId(req.body.topicId)});
    thought.save()
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.post('/thought/remove/:thoughtId', (req, res) => {
    // for now there is no permission checking. must be added later !!!
    Thought.findOneAndRemove({_id: new mongoose.Types.ObjectId(req.params.thoughtId)})
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.put('/thought/edit/:thoughtId', (req, res) => {
    // for now there is no permission checking. must be added later !!!
    Thought.findOneAndUpdate({_id: new mongoose.Types.ObjectId(req.params.thoughtId)},{topic: new mongoose.Types.ObjectId(req.body.topicId), text: req.body.text})
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.post('/thought/reaction/add', (req, res) => {
    const reaction = new Reaction(req.body);    
    reaction.save()
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  router.post('/thought/reaction/remove/:reactionId', (req, res) => {
    // for now there is no permission checking. must be added later !!!
    Reaction.findOneAndRemove({_id: new mongoose.Types.ObjectId(req.params.reactionId)})
      .then(doc => {
        res.sendStatus(200);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });

  /*router.get('/thought/:thoughtId', (req, res) => {
    Reaction.findOne({_id: new mongoose.Types.ObjectId(req.params.thoughtId)})
      .populate('user')
      .populate('topic')
      .then(doc => {
        res.json(doc);
      })
      .catch(err => helper.genericErrorHandler(err, res));
  });*/
}
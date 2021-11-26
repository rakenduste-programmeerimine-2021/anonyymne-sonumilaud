const mongoose = require('mongoose');

module.exports = (router) => {
    router.post('/thought/add', (req, res) => {
        // response should include thoughtId of new thought

        // not implemented
        res.sendStatus(501);
    });

    router.post('/thought/remove/:thoughtId', (req, res) => {
        let thoughtId = req.params.thoughtId;
        
        // not implemented
        res.sendStatus(501);
    });

    router.post('/thought/edit/:thoughtId', (req, res) => {
        let thoughtId = req.params.thoughtId;

        // not implemented
        res.sendStatus(501);
    });
    
    router.post('/thought/reaction/add/:thoughtId', (req, res) => {
        let thoughtId = req.params.thoughtId;

        // not implemented
        res.sendStatus(501);
    });
    
    router.post('/thought/reaction/remove/:thoughtId', (req, res) => {
        let thoughtId = req.params.thoughtId;

        // not implemented
        res.sendStatus(501);
    });

    router.get('/thought/view/:thoughtId', (req, res) => {
        let thoughtId = req.params.thoughtId;
        
        // not implemented
        res.sendStatus(501);
    });
}
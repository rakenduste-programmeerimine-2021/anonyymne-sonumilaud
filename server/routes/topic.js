const mongoose = require('mongoose');

module.exports = (router) => {
    router.get('/topic/view/:topicId', (req, res) => {
        let topicId = req.params.topicId;

        // not implemented
        res.sendStatus(501);
    });
}
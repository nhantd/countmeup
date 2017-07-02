const express = require('express');
const router = express.Router();
const firebaseMiddleware = require('express-firebase-middleware');
const firebaseAPI = require('../api/firebase-api');
const Promise = require('promise');


router.use((req, res, next) => {
    next();
});

// router.use('/api', firebaseMiddleware.auth);

router.get('/', (req, res) => {
    res.json({
        message: 'Home'
    });
});

router.post('/api/update', (req, res) => {
    var jsondata = req.body;
    firebaseAPI.updateVoteCount(jsondata.campaing_id, jsondata.candidate, jsondata.voter);
    res.json({
        status: 'updated'
    })
});

router.get('/api/getresult/:campaing_id', (req, res) => {
    var campaing_id = req.params.campaing_id;
    firebaseAPI.getResult(campaing_id).then(function(result){
        res.json({
            result
        })
    })
    

});

module.exports = router;

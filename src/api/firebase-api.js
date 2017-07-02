'use strict';
const firebase = require('../config/firebase-admin');
const Promise = require('promise');

var firebaseApi = {

  updateVoteCount: function(campaign, candidate, voter) {
      var campaignRef = firebase.database().ref(campaign + '/' + 'result/');

      campaignRef.once("value").then( function (snapshot) {
        
        var postRef = firebase.database().ref(campaign + '/result/' + candidate);
        var status = '';

        postRef.transaction(function(candidateResult) {

        if (candidateResult && !candidateResult[voter]) {
          candidateResult.votes = candidateResult.votes  + 1 ;
          candidateResult[voter] = 'Voted';
          status = 'updated'
        }
        else {
          status = 'duplicated'
        }
      });
    })
  },

  getResult: function(campaign) {
    return new Promise(function(resolve, reject) {
      var campaignRef = firebase.database().ref(campaign + '/' + 'result/');
      campaignRef.orderByChild("votes").once("value").then(function(snapshot){
        // console.log(snapshot)
        var result = {};
        snapshot.forEach(function(child){
            var key = child.key;
            var value = child.val().votes;
            result[key] = value;
        });
        resolve(result);

      })
    })

  }
}

module.exports = firebaseApi;
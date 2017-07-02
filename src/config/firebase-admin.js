const firebase = require('firebase-admin');

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);
const firebaseURL = process.env.FIREBASE_DATABASE_URL;

var defaultApp = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: firebaseURL
});

console.log('Firebase Admin Initialized', defaultApp.name);

module.exports = firebase;

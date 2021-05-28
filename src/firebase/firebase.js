import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:685257007788:web:9657f90c2b1d3f0e153509",
  measurementId: "G-P7VX5J172L"
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
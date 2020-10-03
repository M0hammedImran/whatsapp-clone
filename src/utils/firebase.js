import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBNSjivUy9Kb0kBCepnpPmjOtruGG3jdKs',
  authDomain: 'whatsapp-clone-mern-1.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-mern-1.firebaseio.com',
  projectId: 'whatsapp-clone-mern-1',
  storageBucket: 'whatsapp-clone-mern-1.appspot.com',
  messagingSenderId: '264354720981',
  appId: '1:264354720981:web:dcf38ee5a9b4be60f3465c',
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

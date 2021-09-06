import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAw_N_m87K4pWygpFOKmg3J0tHx-2hb26U",
    authDomain: "slack-clone-ed5e4.firebaseapp.com",
    projectId: "slack-clone-ed5e4",
    storageBucket: "slack-clone-ed5e4.appspot.com",
    messagingSenderId: "142780740251",
    appId: "1:142780740251:web:f2aa60e2f68a488606cc3e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
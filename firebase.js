import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCFakKUDjIwDMDZsRTpAHxonEwmd5uqayU',
  authDomain: 'facebook-clone-vc.firebaseapp.com',
  projectId: 'facebook-clone-vc',
  storageBucket: 'facebook-clone-vc.appspot.com',
  messagingSenderId: '483916832450',
  appId: '1:483916832450:web:c0006f147f405e03d3655b',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

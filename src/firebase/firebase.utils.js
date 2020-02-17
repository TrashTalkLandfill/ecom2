import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCAPmGxsYkDq7_8nPkIiKk614DxPUPc9w0",
  authDomain: "ecommerce-project-douggles.firebaseapp.com",
  databaseURL: "https://ecommerce-project-douggles.firebaseio.com",
  projectId: "ecommerce-project-douggles",
  storageBucket: "ecommerce-project-douggles.appspot.com",
  messagingSenderId: "550498050320",
  appId: "1:550498050320:web:3710b3be59598938f4c595"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
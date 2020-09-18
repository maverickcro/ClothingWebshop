import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1dIGyNQZtB2yjYs4msuIdX0zfl1LSAbY",
    authDomain: "crwn-db-154ca.firebaseapp.com",
    databaseURL: "https://crwn-db-154ca.firebaseio.com",
    projectId: "crwn-db-154ca",
    storageBucket: "crwn-db-154ca.appspot.com",
    messagingSenderId: "1029079474323",
    appId: "1:1029079474323:web:420e5a15979f9952762d66",
    measurementId: "G-K14F9937LK"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
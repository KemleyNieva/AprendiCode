import firebase from 'firebase';
import FirebaseContext, { withFirebase } from './FirebaseContext';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXB05hdwIMO0CD8qXmiBA3ajAElo3WsLE",
    authDomain: "aprendicode.firebaseapp.com",
    databaseURL: "https://aprendicode.firebaseio.com",
    projectId: "aprendicode",
    storageBucket: "aprendicode.appspot.com",
    messagingSenderId: "375220699540"
  };

  class Firebase {
      constructor(){
        firebase.initializeApp(config);

        this.auth = firebase.auth();
      }

      //Firebase authentication for signing up first time
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      //Firebase authentication for logging in 
      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

      //Firebase log out function--nothing happens if no user logged in 
      doSignOut = () => {
        this.auth.signOut();
      };

      //Password reset and password 
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      
    doPasswordUpdate = password =>
          this.auth.currentUser.updatePassword(password);
  }


  
  export default Firebase;

  export { FirebaseContext, withFirebase };

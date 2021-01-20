import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDO05rTjQMUfLdMrM58HtDRqcfMY8DOtl0",
    authDomain: "clone-632f5.firebaseapp.com",
    projectId: "clone-632f5",
    storageBucket: "clone-632f5.appspot.com",
    messagingSenderId: "305677486102",
    appId: "1:305677486102:web:666fcb255526281e9d4d37"
  };

//   this is what connects the Front-End to the Back-End
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
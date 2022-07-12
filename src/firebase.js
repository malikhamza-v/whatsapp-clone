import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrsvBle9zqtpzNyrDJ0g5MD6vNdNZ-jeU",
  authDomain: "whatsapp-clone-69.firebaseapp.com",
  projectId: "whatsapp-clone-69",
  storageBucket: "whatsapp-clone-69.appspot.com",
  messagingSenderId: "571111438810",
  appId: "1:571111438810:web:4dda166c0e21c87d9ee8e3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;

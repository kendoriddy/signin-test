import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQNGunSHK4COue_ANocFdJlzmOid_cTPU",
  authDomain: "signin-test-c5f76.firebaseapp.com",
  projectId: "signin-test-c5f76",
  storageBucket: "signin-test-c5f76.appspot.com",
  messagingSenderId: "375111052894",
  appId: "1:375111052894:web:688d1cc9ffcb13a82a4ecf",
  measurementId: "G-DFGKEBPKYZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, signInWithPopup };

import React from "react";
import { auth, provider, signInWithPopup } from "../utils/firebase";
import styles from "../styles/App.module.css";

const SignIn = ({ onSignIn }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onSignIn(user.email, user.displayName);
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={handleSignIn}>
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;

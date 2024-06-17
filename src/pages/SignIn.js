import React from "react";
import { auth, provider, signInWithPopup } from "../utils/firebase";
import { toast } from "react-toastify";
import styles from "../styles/App.module.css";

const SignIn = ({ onSignIn }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onSignIn(user.email, user.displayName);
    } catch (error) {
      toast.error("Failed to sign in with Google. Please try again.");
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

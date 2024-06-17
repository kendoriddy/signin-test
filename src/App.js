import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/SignIn";
import OtpDisplay from "./pages/OtpDisplay";
import styles from "./styles/App.module.css";

const App = () => {
  const [user, setUser] = useState({ email: "", displayName: "" });

  const handleSignIn = (email, displayName) => {
    setUser({ email, displayName });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OTP Authentication</h1>
      {!user.email ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <OtpDisplay email={user.email} displayName={user.displayName} />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;

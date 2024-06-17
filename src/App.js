import React, { useState } from "react";
import SignIn from "./pages/SignIn";
import OtpDisplay from "./pages/OtpDisplay";

const App = () => {
  const [user, setUser] = useState({ email: "", displayName: "" });

  const handleSignIn = (email, displayName) => {
    setUser({ email, displayName });
  };

  return (
    <div className="App">
      <h1>OTP Authentication</h1>
      {!user.email ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <OtpDisplay email={user.email} displayName={user.displayName} />
      )}
    </div>
  );
};

export default App;

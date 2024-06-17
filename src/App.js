import React, { useState } from "react";
import SignIn from "./SignIn";
import OtpDisplay from "./OtpDisplay";

const App = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <h1>OTP Authentication</h1>
      {!email ? <SignIn onSignIn={setEmail} /> : <OtpDisplay email={email} />}
    </div>
  );
};

export default App;

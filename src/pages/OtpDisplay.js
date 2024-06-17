import React, { useState, useEffect } from "react";

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const OtpDisplay = ({ email, displayName }) => {
  const [otp, setOtp] = useState("");
  const [expiryTime, setExpiryTime] = useState(null);

  useEffect(() => {
    if (email) {
      const otp = generateOTP();
      setOtp(otp);
      setExpiryTime(Date.now() + 30000);

      const timer = setTimeout(() => {
        setOtp("");
        setExpiryTime(null);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [email]);

  return (
    <div>
      {email && <p>Email: {email}</p>}
      {displayName && <p>Name: {displayName}</p>}
      {otp && <p>OTP: {otp} (expires in 30 seconds)</p>}
      {!otp && email && <p>OTP has expired</p>}
    </div>
  );
};

export default OtpDisplay;

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "../styles/App.module.css";
import { generateOTP } from "../utils/generateOTP";

const OtpDisplay = ({ email, displayName }) => {
  const [otp, setOtp] = useState("");
  const [expiryTime, setExpiryTime] = useState(null);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (email) {
      try {
        const otp = generateOTP();
        setOtp(otp);
        setExpiryTime(Date.now() + 30000);
        setCountdown(30);

        const timer = setTimeout(() => {
          setOtp("");
          setExpiryTime(null);
          setCountdown(30);
        }, 30000);

        const countdownInterval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
          clearTimeout(timer);
          clearInterval(countdownInterval);
        };
      } catch (error) {
        console.error("Error generating OTP:", error);
        toast.error("Failed to generate OTP. Please try again.");
      }
    }
  }, [email]);
  return (
    <div className={styles.card}>
      {email && <p>Email: {email}</p>}
      {displayName && <p>Name: {displayName}</p>}
      {otp && (
        <p>
          OTP: {otp} (expires in {countdown} seconds)
        </p>
      )}{" "}
      {!otp && email && <p className={styles.expired}>OTP has expired</p>}
    </div>
  );
};

export default OtpDisplay;

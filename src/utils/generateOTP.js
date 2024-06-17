import { totp } from "otplib";

const secret = "KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD";

export const generateOTP = () => {
  try {
    return totp.generate(secret);
  } catch (error) {
    console.error("Error generating OTP:", error);
    throw new Error("Failed to generate OTP");
  }
};

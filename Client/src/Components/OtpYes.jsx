import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../Firebase/setup";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";

const OtpYes = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(confirmation);
      setUser(confirmation);
      setOtpSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      if (data) {
        alert("OTP verification successful");
        navigate("/personal_details");
      }
    } catch (error) {
      console.log(error);
      alert("OTP verification failed");
    }
  };

  const handleBack = () => {
    navigate("/mobile");
  };


  return (
    <>
      <MetaData title="OTP" />
      <button className="btn-pre" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">
        Do you want to proceed without OTP verification?
      </h1>
      <Card>
        <div className="input-group">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone("+" + phone)}
          />

          <div id="recaptcha"></div>

          {otpSent && (
            <>
              <input
                className="radio-button"
                onChange={(e) => setOtp(e.target.value)}
                type="text"
                placeholder="Enter otp"
              />
              <button className="btn" onClick={verifyOtp}>
                Verify OTP
              </button>
            </>
          )}

          {!otpSent && (
            <button className="btn" style={{ margin: "5%" }} onClick={sendOtp}>
              Send OTP
            </button>
          )}
        </div>
      </Card>
    </>
  );
};

export default OtpYes;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import axios from "axios";
import MetaData from "../Layout/MetaData";

const Mobile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileNumber, setMobileNumber] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const { selectedState, selectedCity, pincode } = location.state || {};

  const handleInputChange = (event) => {
    const inputNumber = event.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(inputNumber);
    setWarningMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNextDisabled) {
      axios
        .post("http://localhost:7000/checkMobile", {
          mobileNumber,
        })
        .then((response) => {
          if (response.data.exists) {
            // Show browser alert if mobile number already exists
            setWarningMessage("This mobile number is already in use.");
            alert("This mobile number is already in use.");
          } else {
            navigate("/otp_verification", {
              state: {
                mobileNumber,
                selectedState,
                selectedCity,
                pincode,
              },
            });
          }
        })
        .catch((error) => {
          console.error("Error checking mobile number:", error);
        });
    }
  };

  const isNextDisabled = mobileNumber.length !== 10;

  return (
    <>
      <MetaData title="Mobile" />

      <button className="btn-pre" onClick={() => navigate("/login")}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">What is your mobile number?</h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            This is used to create an account in your name on the Haqdarshak
            app.
          </p>
          {warningMessage && (
            <p style={{ color: "red", margin: "0px 0px 10px 5px" }}>
              {warningMessage}
            </p>
          )}
          <button className="btn" type="submit" disabled={isNextDisabled}>
            Next
          </button>
        </form>
      </Card>
    </>
  );
};

export default Mobile;

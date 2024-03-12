import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import { useNavigate, useLocation } from "react-router-dom";
import MetaData from "../Layout/MetaData";

function OtpVerification() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const { selectedState, selectedCity, pincode, mobileNumber } =
    location.state || {};

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsNextDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNextDisabled) {
      if (selectedOption === "yes") {
        navigate("/personal_details", {
          state: {
            mobileNumber,
            selectedState,
            selectedCity,
            pincode,
          },
        });
      } else if (selectedOption === "no") {
        navigate("/otp_yes");
      }
    }
  };

  const handleBack = () => {
    navigate("/mobile");
  };

  return (
    <>
      <MetaData title="OTP Yes or No" />
      <button className="btn-pre" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">
        Do you want to proceed without OTP verification?
      </h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="radio-button">
              <input
                type="radio"
                name="select"
                value="yes"
                onChange={handleOptionChange}
              />
              Yes
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="select"
                value="no"
                onChange={handleOptionChange}
              />
              No, I want to complete OTP verification
            </label>
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            Proceed without OTP if you live in an area with low network
            connectivity
          </p>
          <button className="btn" type="submit" disabled={isNextDisabled}>
            Next
          </button>
        </form>
      </Card>
    </>
  );
}

export default OtpVerification;

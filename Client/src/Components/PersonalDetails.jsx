import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import DatePicker from "react-datepicker";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import MetaData from "../Layout/MetaData";

const PersonalDetails = () => {
  const [birthdate, setBirthdate] = useState(null);
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedState, selectedCity, pincode, mobileNumber } =
    location.state || {};
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/details", {
        birthdate,
        fullName,
        gender,
        selectedState,
        selectedCity,
        pincode,
        mobileNumber,
      })
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });

    navigate("/welcome");
  };

  const handleBack = () => {
    navigate("/otp_verification");
  };

  // Function to check if form is complete
  const isFormComplete = () => {
    return fullName !== "" && gender !== "" && birthdate !== null;
  };

  return (
    <>
      <MetaData title="Personal Details" />

      <button className="btn-pre" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">Personal Details</h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <label
            htmlFor="Gender"
            style={{
              marginRight: "200px",
              fontWeight: "bold",
            }}
          >
            Gender
          </label>
          <div
            className="radio-button"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={() => setGender("Male")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={() => setGender("Female")}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={() => setGender("Other")}
              />
              Other
            </label>
          </div>
          <label
            htmlFor="DOB"
            style={{
              marginRight: "200px",
              fontWeight: "bold",
            }}
          >
            DOB
          </label>
          <div className="input-group">
            <div>
              <DatePicker
                selected={birthdate}
                onChange={(date) => setBirthdate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="Enter your birthdate"
                className="input-field"
              />
            </div>
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            This information helps us suggest schemes that are right for you.
          </p>
          <button className="btn" type="submit" disabled={!isFormComplete()}>
            Next
          </button>
        </form>
      </Card>
    </>
  );
};

export default PersonalDetails;

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import { useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";

const Welcome = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/personal_details");
  };

  const handleGetStarted = () => {
    navigate("/");
  };

  return (
    <>
      <MetaData title="Welcome Haqdarshak" />

      <button className="btn-pre" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <Card>
        <h4 style={{ color: "#4f285e" }}>Welcome to</h4>
        <h1 className="welcome" style={{ color: "#4f285e" }}>
          हकदर्शक
        </h1>
        <h1 style={{ color: "#4f285e" }}>Haqdarshal</h1>
        <h5 style={{ color: "#4f285e" }}>
          Your profile has been created successfully!
        </h5>
        <button
          className="btn"
          type="submit"
          style={{ marginTop: "25%" }}
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </Card>
    </>
  );
};

export default Welcome;

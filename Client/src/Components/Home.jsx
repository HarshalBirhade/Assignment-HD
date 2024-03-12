import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./shared/Card";
import hero from "../hero.png";
import "react-datepicker/dist/react-datepicker.css";
import MetaData from "../Layout/MetaData";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/language");
  };

  return (
    <>
      <MetaData title="Home" />
      <Card>
        <h1 style={{ color: "#4f285e" }}>Haqdarshak</h1>
        <img src={hero} alt="" style={{ width: "75%", height: "75%" }} />
        <button
          className="btn"
          type="button"
          onClick={handleClick}
          style={{ marginTop: "25%" }}
        >
          Next
        </button>
      </Card>
    </>
  );
};

export default Welcome;

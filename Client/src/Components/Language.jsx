import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import MetaData from "../Layout/MetaData";

function Language() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleRadioChange = (e) => {
    setSelectedLanguage(e.target.value);
    setIsNextDisabled(false);
  };

  const handleNextClick = () => {
    navigate("/login");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <MetaData title="Language" />
      <button className="btn-pre" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">Which language do you prefer?</h1>
      <Card>
        <form>
          <div className="input-group">
            <label className="radio-button">
              <input
                type="radio"
                name="language"
                value="English"
                onChange={handleRadioChange}
              />
              English
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="language"
                value="Hindi"
                onChange={handleRadioChange}
              />
              हिंदी
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="language"
                value="Kannada"
                onChange={handleRadioChange}
              />
              ಕನ್ನಡ
            </label>
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            This allows you to experience the app in a language of your
            preference.
          </p>
          <button
            className="btn"
            type="button"
            onClick={handleNextClick}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </form>
      </Card>
    </>
  );
}

export default Language;

import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./shared/Card";
import MetaData from "../Layout/MetaData";

function Login() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (selectedOption === "New") {
      navigate("/location");
    } else if (selectedOption === "Phone") {
      navigate("/mobile");
    }
  };

  return (
    <>
      <MetaData title="Registration Option" />

      <button className="btn-pre" onClick={() => navigate("/language")}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">How do you want to login?</h1>
      <Card>
        <form>
          <div className="input-group">
            <label className="radio-button">
              <input
                type="radio"
                name="login"
                value="New"
                onChange={handleOptionChange}
              />
              Register me as a new user
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="login"
                value="Phone"
                onChange={handleOptionChange}
              />
              Use my Phone Number
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="login"
                value="Card"
                onChange={handleOptionChange}
              />
              Use my Yojana Card
            </label>
          </div>

          <button
            className="btn"
            type="submit"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </button>
        </form>
      </Card>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Indian_states_cities_list from "indian-states-cities-list";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import MetaData from "../Layout/MetaData";

const Location = () => {
  const navigate = useNavigate();
  const states = Object.keys(Indian_states_cities_list.STATE_WISE_CITIES);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
  };

  const handlePincodeChange = (e) => {
    const inputPincode = e.target.value.replace(/\D/g, "");
    setPincode(inputPincode);
  };

  const isNextDisabled = !selectedState || !selectedCity || !pincode;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNextDisabled) {
      navigate("/mobile", {
        state: {
          selectedState,
          selectedCity,
          pincode,
        },
      });
    }
  };

  return (
    <>
      <MetaData title="Location" />

      <button className="btn-pre" onClick={() => navigate("/login")}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">Choose location</h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <select
              className="radio-button"
              value={selectedState}
              onChange={handleStateChange}
              required
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {selectedState && (
              <select
                className="radio-button"
                value={selectedCity}
                onChange={handleCityChange}
                required
              >
                <option value="">Select City</option>
                {Indian_states_cities_list.STATE_WISE_CITIES[selectedState].map(
                  (city, index) => (
                    <option key={index} value={city.label}>
                      {city.label}
                    </option>
                  )
                )}
              </select>
            )}
            {selectedCity && (
              <input
                className="radio-button"
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={handlePincodeChange}
                required
              />
            )}
          </div>

          <button className="btn" type="submit" disabled={isNextDisabled}>
            Next
          </button>
        </form>
      </Card>
    </>
  );
};

export default Location;

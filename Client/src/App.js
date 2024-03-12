import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Language from "./Components/Language.jsx";
import Location from "./Components/Location.jsx";
import Mobile from "./Components/Mobile.jsx";
import OtpVerification from "./Components/OtpVerification.jsx";
import PersonalDetails from "./Components/PersonalDetails.jsx";
import Welcome from "./Components/Welcome.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import OtpYes from "./Components/OtpYes.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/language" element={<Language />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/mobile" element={<Mobile />} />
          <Route exact path="/otp_verification" element={<OtpVerification />} />
          <Route exact path="/personal_details" element={<PersonalDetails />} />
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/otp_yes" element={<OtpYes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

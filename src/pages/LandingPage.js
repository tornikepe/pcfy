import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.modules.css";
import LandingImage from "../images/Group-1.png";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div id="main-div">
      <h1>redberry</h1>
      <img className="landing-page-img" src={LandingImage} alt="landing-page" />
      <div>
        <button
          className="add"
          onClick={() => navigate("/employee-information")}
        >
          ჩანაწერის დამატება
        </button>
        <button className="list" onClick={() => navigate("/list")}>
          ჩანაწერების სია
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

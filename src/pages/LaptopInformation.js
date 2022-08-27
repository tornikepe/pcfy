import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeInformation.modules.css";
import Vector from "../images/Vector.png";
// import Logo from "../images/logo.png";
function LaptopInformation() {
  const navigate = useNavigate();

  return (
    <div id="main-div">
      <button
        className="back"
        onClick={() => navigate("/employee-information")}
      >
        <img src={Vector} alt="Vector" />
      </button>
      <div className="main-div">
        <header>
          <h1 className="employee-info">თანამშრომლების ინფო</h1>
          <span className="black-line"></span>
          <h1 className="laptop-info">ლეპტოპის მახასიათებლები</h1>
        </header>
        <form className="registration"></form>
      </div>
    </div>
  );
}

export default LaptopInformation;

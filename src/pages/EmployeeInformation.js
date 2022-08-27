import { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeInformation.modules.css";
import Vector from "../images/Vector.png";
import Logo from "../images/logo.png";
import { InfoContext } from "../context/InfoContext";
// import { validChecker } from "../helper/Helper";

function EmployeeInformation() {
  const navigate = useNavigate();

  const { info } = useContext(InfoContext);

  const [validInfo, setValidInfo] = useState({
    // name: validChecker(info, "name"),
    // username: validChecker(info, "username"),
    // team_id: validChecker(info, "team_id"),
    // position_id: validChecker(info, "position_id"),
    // phone_number: validChecker(info, "phone_number "),
    // email: validChecker(info, "email "),
  });
  let x = useMemo(() => {
    return -1;
  }, [validInfo]);

  function handleValidation() {
    if (!Object.values(validInfo).every((element) => element === true)) {
      const error = Object.values(validInfo).map((element) => {
        if (element === "" || !element) return false;
        return true;
      });
      setValidInfo({
        name: error[0],
        username: error[1],
        team_id: error[2],
        position_id: error[3],
        phone_number: error[4],
        email: error[5],
      });
      return false;
    }
    localStorage.setItem("Info", JSON.stringify(info));
    return true;
  }
  return (
    <div id="main-div">
      <button className="back" onClick={() => navigate("/")}>
        <img src={Vector} alt="Vector" />
      </button>
      <div className="main-div">
        <header>
          <h1 className="employee-info">თანამშრომლების ინფო</h1>
          <span className="black-line"></span>
          <h1 className="laptop-info">ლეპტოპის მახასიათებლები</h1>
        </header>
        <form className="registration">
          <div className="name-username">
            <label htmlFor="name">სახელი</label>
            <input type="text" id="name" placeholder="გრიშა" />
            <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>

            <label htmlFor="username">გვარი</label>
            <input type="text" id="username" placeholder="ბაგრატიონი" />
            <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
          </div>
          <select defaultValue="team">
            <option value="team" disabled hidden>
              თიმი
            </option>
            <option value="developement">დეველოპმენტი</option>
            <option value="hr">HR</option>
            <option value="sales">გაყიდვები</option>
            <option value="design">დიზაინი</option>
            <option value="marketing">მარკეტინგი</option>
          </select>

          <select defaultValue="position">
            <option value="position" defaultValue disabled hidden>
              პოზიცია
            </option>
            <option value="developement">დეველოპმენტი</option>
          </select>

          <label htmlFor="email">მეილი</label>
          <input type="email" id="email" placeholder="grish666@redberry.ge" />
          <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>

          <label htmlFor="phone">ტელეფონის ნომერი</label>
          <input type="text" id="phone" placeholder="+995 598 00 07 01" />
          <div>
            <p>ERROR</p>
          </div>
          <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>

          <button
            className="next"
            onClick={() => navigate("/laptop-information")}
          >
            შემდეგი
          </button>

          <img src={Logo} alt="redberry-logo" />
        </form>
      </div>
    </div>
  );
}

export default EmployeeInformation;

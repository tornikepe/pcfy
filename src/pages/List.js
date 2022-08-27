import React from "react";
import { useNavigate } from "react-router-dom";
import "./List.modules.css";
function List() {
  const navigate = useNavigate();
  return (
    <div id="main-div">
      <h1>List Working</h1>
    </div>
  );
}

export default List;

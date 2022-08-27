import { useState, createContext, useEffect } from "react";
let firstRender = true;
const InfoContext = createContext();
function InfoContextProvider({ children }) {
  const [info, setInfo] = useState(() => {
    const data = localStorage.getItem("Info");
    if (data) return { ...JSON.parse(data) };
    return {
      name: "",
      surname: "",
      team_id: "",
      position_id: "",
      phone_number: "",
      email: "",
      token: "",
      laptop_name: "",
      laptop_image: "",
      laptop_brand_id: "",
      laptop_cpu: "",
      laptop_cpu_cores: "",
      laptop_cpu_threads: "",
      laptop_ram: "",
      laptop_hard_drive_type: "",
      laptop_state: "",
      laptop_purchase_date: "",
      laptop_price: "",
    };
  });

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    localStorage.setItem("Info", JSON.stringify(info));
  }, [info]);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
}

export { InfoContext, InfoContextProvider };

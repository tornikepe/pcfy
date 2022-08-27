import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EmployeeInformation from "./pages/EmployeeInformation";
import List from "./pages/List";
import LaptopInformation from "./pages/LaptopInformation";
import { InfoContextProvider } from "./context/InfoContext";

function App() {
  return (
    <InfoContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/employee-information" element={<EmployeeInformation />} />
        <Route path="/laptop-information" element={<LaptopInformation />} />
        <Route path="/List" element={<List />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </InfoContextProvider>
  );
}

export default App;

// Uploading.js
import Menu from "../components/Menu";
import ChartFrame from "../components/ChartFrame";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "./Uploading.css";

const Uploading = () => {
  const location = useLocation(); // Use useLocation hook to get location object
  const filename = location.state ? location.state.filename : ""; // Access filename from location

  return (
    <div className="uploading">
      <div className="menu-frame">
        <Menu />
      </div>
      <ChartFrame filename={filename} />
    </div>
  );
};

export default Uploading;

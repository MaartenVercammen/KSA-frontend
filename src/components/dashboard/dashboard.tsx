import React from "react";
import NavbarDashboard from "./navbarDashboard";
import UploadBraggels from "./braggel/uploadBraggels";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <NavbarDashboard />
      <UploadBraggels />
    </div>
  );
};

export default Dashboard;

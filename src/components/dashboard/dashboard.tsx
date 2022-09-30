import { useState } from "react";
import NavbarDashboard from "./navbarDashboard";
import UploadBraggels from "./braggel/uploadBraggels";
import "./dashboard.css";
import UserOverview from "./users/userOverview";

const Dashboard = () => {
  const [activeTab, setactiveTab] = useState<number>(
    Number.parseInt(sessionStorage.getItem("dashboardPage") || "") || 0
  );

  const changeTab = (index: number) => {
    setactiveTab(index);
    sessionStorage.setItem("dashboardPage", index.toString());
  };

  return (
    <div>
      <NavbarDashboard setactivetab={changeTab} />
      {activeTab == 0 && <UploadBraggels />}
      {activeTab == 1 && <UserOverview />}
    </div>
  );
};

export default Dashboard;

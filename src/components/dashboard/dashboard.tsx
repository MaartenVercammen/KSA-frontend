import { useState } from 'react';
import NavbarDashboard from './navbarDashboard';
import UploadBraggels from './braggel/uploadBraggels';
import './dashboard.scss';
import UserOverview from './users/userOverview';
import CreateUser from './users/createUser';

const Dashboard = () => {
    const [activeTab, setactiveTab] = useState<number>(
        Number.parseInt(sessionStorage.getItem('dashboardPage') || '') || 0
    );

    const changeTab = (index: number) => {
        setactiveTab(index);
        sessionStorage.setItem('dashboardPage', index.toString());
    };

    return (
        <div>
            <NavbarDashboard setactivetab={changeTab} />
            {activeTab == 0 && <UploadBraggels />}
            {activeTab == 1 && <UserOverview changeTab={changeTab} />}
            {activeTab == 2 && <CreateUser changeTab={changeTab} />}
        </div>
    );
};

export default Dashboard;

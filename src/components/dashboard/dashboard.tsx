import { useState } from 'react';
import NavbarDashboard from './navbarDashboard';
import UploadBraggels from './braggel/uploadBraggels';
import './dashboard.scss';
import UserOverview from './users/userOverview';
import CreateUser from './users/createUser';
import UpdateUser from './users/updateUser';
import authTab from './tabAuth';

const Dashboard = () => {
    const [arg, setarg] = useState<any[]>([]);
    const dontsavetabs = [3];
    const [activeTab, setactiveTab] = useState<number>(
        Number.parseInt(sessionStorage.getItem('dashboardPage') || '') || 0
    );

    const changeTab = (index: number, ...args) => {
        if (authTab(index)) {
            setactiveTab(index);
            if (!dontsavetabs.includes(index)) {
                sessionStorage.setItem('dashboardPage', index.toString());
            }
            if (arg) {
                setarg(args);
            }
        }
    };

    return (
        <div>
            <NavbarDashboard setactivetab={changeTab} />
            {activeTab == 0 && <UploadBraggels />}
            {activeTab == 1 && <UserOverview changeTab={changeTab} />}
            {activeTab == 2 && <CreateUser changeTab={changeTab} />}
            {activeTab == 3 && <UpdateUser changeTab={changeTab} userToUpdate={arg[0]} />}
        </div>
    );
};

export default Dashboard;

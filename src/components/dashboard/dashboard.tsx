import { useState } from 'react';
import NavbarDashboard from './navbarDashboard';
import UploadBraggels from './braggel/uploadBraggels';
import './dashboard.scss';
import UserOverview from './users/userOverview';
import CreateUser from './users/createUser';
import UpdateUser from './users/updateUser';
import authTab from './tabAuth';
import Posts from './posts/posts';
import AddPosts from './posts/addPosts';
import UpdatePost from './posts/updatePost';

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
            {activeTab == 4 && <Posts changeTab={changeTab} />}
            {activeTab == 5 && <AddPosts changeTab={changeTab} />}
            {activeTab == 6 && <UpdatePost changeTab={changeTab} post={arg[0]} />}
        </div>
    );
};

export default Dashboard;

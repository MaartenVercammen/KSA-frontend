import React from 'react';
import { Navigate } from 'react-router-dom';
import NavbarDashboard from './navbarDashboard';
import { Roles } from '../../types';
import './dashboard.css';

type Props = {
  element: React.ReactNode,
  isAllowed: Roles[],
  redirect: string,
};

function Dashboard({ element, isAllowed, redirect } : Props) {
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  if (user === '') return <Navigate to="/login" />;
  if (!isAllowed.includes(user.role)) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <NavbarDashboard isAllowed={isAllowed.includes(user.role)} />
      {element}
    </div>
  );
}

export default Dashboard;

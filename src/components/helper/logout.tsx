import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {
  useEffect(() => {
    sessionStorage.removeItem('user');
  }, []);

  return <Navigate to="/" />;
}

export default Logout;

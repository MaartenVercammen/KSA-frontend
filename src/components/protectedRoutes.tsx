import React, { useEffect } from 'react'
import { Navigate, Outlet  } from 'react-router-dom'
import { tokenToString } from 'typescript';
import { Roles, user } from '../types/index'

type Props = {
    redirectPath: string;
    isAllowed: Array<Roles>
}

const ProtectedRoutes = ({redirectPath, isAllowed}: Props) => {

  const isLoggedIn = () => { 
    const tokenString = sessionStorage.getItem('user');
    if(tokenString != null){
      const user = JSON.parse(tokenString);
      if(isAllowed.includes(user.role))return true
      return false;
    }
    return false;
  }

  return isLoggedIn() ? <Outlet/> : <Navigate to={redirectPath} />
}

export default ProtectedRoutes
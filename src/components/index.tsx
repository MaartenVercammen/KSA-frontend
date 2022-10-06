import React, { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import Body from './mainPage/body';
import Footer from './footer/footer';
import Header from './header/header';
import NavBar from './header/navbar';
import UserService from '../service/userservice';

function Index() {
  return (
    <div className="page">
      <Header />
      <NavBar />
      <Body />
    </div>
  );
}

export default Index;

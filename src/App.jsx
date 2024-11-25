import logo from './logo.svg';
import './App.css';
import DataContainer from './dataContainer/dataContainer';
import NoMatchRoute from './NoMatch/NoMatchRoute';
import { BrowserRouter, Outlet, Routes } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainScreen from './MainScreen/MainScreen';
import UpperNav from './UpperNav/UpperNav';
import Navigation from './navigationBar/Navigation';


class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <UpperNav></UpperNav>
          <div class="flex-container">
            <Navigation></Navigation>
            <Routes>
              <Route path="devices" element={<MainScreen />} />
              <Route path="*" element={<NoMatchRoute />} />
            </Routes> </div>

        </BrowserRouter>
        <>

        </></>
    )
  }

}

export default App;

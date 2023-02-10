// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";
import ParkingPage from "../ParkingPage/ParkingPage";
import CarUseHistoryPage from "../CarUseHistoryPage/CarUseHistoryPage";
import App from "../../App";
import App2 from "../../App2";

function LoginPage() {



    return (
      <div className="d-flex flex-column justify-content-around align-items-center vh-100" style={{
        backgroundColor: 'WhiteSmoke'
      }}>
        <nav>
        <Link to="/">
          <button type="button" onClick={() => { return (<App />); }} className="btn btn-outline-dark" style={{ width: "600px", height: "150px", fontSize: "72px" }}>
            User
          </button>
        </Link>
        <Link to="/">
          <button type="button" onClick={() => { return (<App />); }} className="btn btn-outline-dark" style={{ width: "600px", height: "150px", fontSize: "72px" }}>
            VIP
          </button>
        </Link>
        <Link to="/CarUseHistory">
          <button type="button" onClick={() => { return (<App2 />); }} className="btn btn-outline-dark" style={{ width: "600px", height: "150px", fontSize: "72px" }}>
            ADMIN
          </button>
        </Link>
        </nav>

      </div>
    );
  

}

export default LoginPage;

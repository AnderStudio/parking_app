// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

class ParkingPage extends Component {
  render() {
    return (
      <div>
        <h1>Parking</h1>
        <nav className="d-flex flex-column">
          <div className="d-flex flex-column">
            <Link to="/FindCarA">
              <button className="e-button" type="primary">Ａ區(餘10)</button>
            </Link>
            <Link to="/FindCarB">
              <button className="e-button" type="primary">B區(餘40)</button>
            </Link>
            <Link to="/FindCarC">
              <button className="e-button" type="primary">C區(餘30)</button>
            </Link>
            <Link to="/FindCarD">
              <button className="e-button" type="primary">D區(餘20)</button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default ParkingPage;

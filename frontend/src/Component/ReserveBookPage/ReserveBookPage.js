// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class ReserveBookPage extends Component {
  render() {
    return (
      <div>
        <h1>預約</h1>
        <nav className="d-flex flex-column">
          <Link to="/ReserveBook">
            <button className="e-button" type="primary">新增預約</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default ReserveBookPage;

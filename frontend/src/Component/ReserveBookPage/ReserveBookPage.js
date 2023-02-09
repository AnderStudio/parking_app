// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class ReserveBookPage extends Component {
  render() {
    return (
      <div>
        <h1>預約</h1>
        <div class="btn-group">
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            選擇時段
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">7:00 ~ 8:00</a></li>
            <li><a className="dropdown-item" href="#">8:00 ~ 9:00</a></li>
            <li><a className="dropdown-item" href="#">9:00 ~ 10:00</a></li>
            <li><a className="dropdown-item" href="#">10:00 ~ 11:00</a></li>
          </ul>
        </div>
        <div class="btn-group">
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            選擇區域
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ａ</a></li>
            <li><a className="dropdown-item" href="#">Ｂ</a></li>
            <li><a className="dropdown-item" href="#">Ｃ</a></li>
            <li><a className="dropdown-item" href="#">Ｄ</a></li>
          </ul>
        </div>
        <nav className="d-flex flex-column">
          <Link to="/Reserve">
            <button className="e-button" type="primary">確認</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default ReserveBookPage;

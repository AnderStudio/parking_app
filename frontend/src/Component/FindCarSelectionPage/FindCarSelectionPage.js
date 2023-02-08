// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

class FindCarPage extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>Find My Car</h1>
        </main>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="License plate number" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>
    );
  }
}

export default FindCarPage;

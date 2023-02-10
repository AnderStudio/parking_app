// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

function FindCarPage () {

    const [message, setMessage] = useState('');
  
    const [updated, setUpdated] = useState(message);
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleClick = () => {
      // 👇 "message" stores input field value
      setUpdated(message);
      
    };

    return (
      <div>
        <h1>Find My Car</h1>
        <div className="input-group mb-3 d-flex flex-column">
          <div className="d-flex flex-row justify-content-center">
            <input type="text" id="message" name="message" className="form-control w-50" placeholder="License plate number" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} value={message}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Button</button>
          </div>
          <div className="d-flex flex-column justify-content-center vh-50">
            <h3>停車場：C</h3>
            <h3>車位：009</h3>
            <h3>已停放時間：00：50:00</h3>
          </div>
        </div>
      </div>
    );
  }

export default FindCarPage;

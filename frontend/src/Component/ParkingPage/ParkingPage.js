// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

function ParkingPage() {
  const [data, setdata] = useState({
	  A: 0,
		B: 0,
		C: 0,
		D: 0,
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/parking_remain_spaces").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					A: data.A,
					B: data.B,
					C: data.C,
					D: data.D,
				});
			})
		);
	}, []);
    //console.log(data.A);
    return (
      <div>
        <h1>Parking</h1>
        <nav className="d-flex flex-column">
          <div className="d-flex flex-column">
            <Link to="/FindCarA">
              <button className="e-button" type="primary">Ａ區(餘{data.A})</button>
            </Link>
            <Link to="/FindCarB">
              <button className="e-button" type="primary">B區(餘{data.B})</button>
            </Link>
            <Link to="/FindCarC">
              <button className="e-button" type="primary">C區(餘{data.C})</button>
            </Link>
            <Link to="/FindCarD">
              <button className="e-button" type="primary">D區(餘{data.D})</button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }


export default ParkingPage;

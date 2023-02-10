// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

function FindCarPage() {

  const [data, setdata] = useState({
		D_parking_lot: []
	});

  useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy

		fetch("/my_car_parking_space/{target}").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					D_parking_lot: data.D
				})
			})
    );
	}, []);

  const [text, settext] = useState("");
  return (
    <div>
      <h1>Find My Car</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="License plate number" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Go!</button>
      </div>
    </div>
  );
  
}

export default FindCarPage;

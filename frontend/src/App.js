// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import FindCarPage from './Component/FindCarPage/FindCarPage';
import ParkingPage from './Component/ParkingPage/ParkingPage';
import ReservePage from './Component/ReservePage/ReservePage';
import Footer from './Component/Footer/Footer';

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/data").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					name: data.Name,
					age: data.Age,
					date: data.Date,
					programming: data.programming,
				});
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header d-flex flex-column justify-content-between">
				<HashRouter>
					<Routes>
						<Route exact="true" path="/" element={<ParkingPage />}> </Route>
						<Route path="/FindCar" element={<FindCarPage />}> </Route>
						<Route path="/Reserve" element={<ReservePage />}> </Route>
					</Routes>
					<Footer className = "align-self-stretch"/>
				</HashRouter>
			</header>
		</div>
	);
}

export default App;

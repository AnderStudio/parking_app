// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import FindCarPage from './Component/FindCarSelectionPage/FindCarSelectionPage';
import FindCarPageA from './Component/FindCarSelectAPage/FindCarSelectAPage';
import FindCarPageB from './Component/FindCarSelectBPage/FindCarSelectBPage';
import FindCarPageC from './Component/FindCarSelectCPage/FindCarSelectCPage';
import FindCarPageD from './Component/FindCarSelectDPage/FindCarSelectDPage';
import ParkingPage from './Component/ParkingPage/ParkingPage';
import ReservePage from './Component/ReservePage/ReservePage';
import ReserveBookPage from './Component/ReserveBookPage/ReserveBookPage';
import Footer from './Component/Footer/Footer';
import MapPage from './Component/MapPage/MapPage';


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
				<Routes>
					<Route exact="true" path="/" element={<ParkingPage />}> </Route>
					<Route path="/FindCar" element={<FindCarPage />}> </Route>
					<Route path="/Reserve" element={<ReservePage />}> </Route>
					<Route path="/FindCarA" element={<FindCarPageA />} > </Route>
					<Route path="/FindCarB" element={<FindCarPageB />} > </Route>
					<Route path="/FindCarC" element={<FindCarPageC />} > </Route>
					<Route path="/FindCarD" element={<FindCarPageD />} > </Route>
					<Route path="/ReserveBook" element={<ReserveBookPage />}> </Route>
					<Route path="/MapPage" element={<MapPage />}> </Route>
				</Routes>
				<Footer className="align-self-stretch" />

			</header>
		</div>
	);
}

export default App;

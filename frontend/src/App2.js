// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Footer2 from './Component/Footer2/Footer2';
import CarUseHistoryPage from './Component/CarUseHistoryPage/CarUseHistoryPage';
import CarEntryRecordPage from './Component/CarEntryRecordPage/CarEntryRecordPage';
import CarReservePage from './Component/CarReservePage/CarReservePage';
import BlackListPage from './Component/BlackListPage/BlackListPage';


function App2() {
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
					<Route exact="true" path="/" element={<CarUseHistoryPage />}> </Route>
					<Route path="/CarEntry" element={<CarEntryRecordPage />}> </Route>
					<Route path="/CarReserve" element={<CarReservePage />} > </Route>
					<Route path="/BlackList" element={<BlackListPage />} > </Route>
				</Routes>
				<Footer2 className="align-self-stretch" />

			</header>
		</div>
	);
}

export default App2;

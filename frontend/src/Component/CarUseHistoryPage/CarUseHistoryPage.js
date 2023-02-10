// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

function CarUseHistoryPage() {
  
  const [data, setdata] = useState([]);
  useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/parking_events").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata(data)
			})
    );
	}, []);

  if(data == false){
    return (<div>Loading...</div>);
  }
  console.log(data);
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Park ID</th>
            <th scope="col">License Number</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>A-002</td>
            <td>7C6856</td>
            <td>2023/02/07 09:14</td>
            <td>2023/02/07 11:20</td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>A-002</td>
            <td>7C6856</td>
            <td>2023/02/07 09:14</td>
            <td>2023/02/07 11:20</td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>A-002</td>
            <td>7C6856</td>
            <td>2023/02/07 09:14</td>
            <td>2023/02/07 11:20</td>
          </tr>
          <tr>
          <th scope="row">4</th>
            <td>{data[0]["parking_space_id"]}</td>
            <td>{data[0]["license_num"]}</td>
            <td>{data[0]["start_time"]}</td>
            <td>{data[0]["end_time"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
}

export default CarUseHistoryPage;

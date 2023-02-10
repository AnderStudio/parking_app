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

  if (data == false) {
    return (<div>Loading...</div>);
  }
  console.log(data);

  let lists = [];

  for (let i = 0; i < data.length; i += 1) {
    lists.push(
      <tr>
        <th scope="row">{i+1}</th>
        <td>{data[i]["parking_space_id"]}</td>
        <td>{data[i]["license_num"]}</td>
        <td>{data[i]["start_time"]}</td>
        <td>{data[i]["end_time"]}</td>
      </tr>
    )
  }

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
          {lists}
        </tbody>
      </table>
    </div>
  );

}

export default CarUseHistoryPage;

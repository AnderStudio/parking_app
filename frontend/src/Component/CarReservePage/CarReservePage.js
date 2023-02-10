// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

function CarReservePage() {

  
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/reservation');
          const data = await response.json();
          console.log(data);
          setCards(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
    //console.log(cards);
    if(cards==false){
      return (<div>Loading...</div>);
    }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">License Number</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Park ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>4158DR</td>
            <td>2023/02/07 00:00</td>
            <td>2023/02/07 23:59</td>
            <td>A-007</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>4158DR</td>
            <td>2023/02/07 00:00</td>
            <td>2023/02/07 23:59</td>
            <td>A-007</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>4158DR</td>
            <td>2023/02/07 00:00</td>
            <td>2023/02/07 23:59</td>
            <td>A-007</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>{cards[0]["license_num"]}</td>
            <td>{cards[0]["eff_start_time"]}</td>
            <td>{cards[0]["eff_end_time"]}</td>
            <td>{cards[0]["park_id"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  
}
export default CarReservePage;

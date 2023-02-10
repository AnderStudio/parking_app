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

    let lists = [];

  for (let i = 0; i < cards.length; i += 1) {
    lists.push(
      <tr>
        <th scope="row">{i+1}</th>
        <td>{cards[i]["park_id"]}</td>
        <td>{cards[i]["license_num"]}</td>
        <td>{cards[i]["eff_start_time"]}</td>
        <td>{cards[i]["eff_end_time"]}</td>
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
export default CarReservePage;

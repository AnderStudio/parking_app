// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class CarReservePage extends Component {
  render() {
    return (
      <div>
        <table class="table table-hover">
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default CarReservePage;

// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class CarUseHistoryPage extends Component {
  render() {
    return (
      <div>
        <table class="table table-hover">
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default CarUseHistoryPage;

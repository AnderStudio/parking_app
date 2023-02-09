// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class BlackListPage extends Component {
  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">LicenseNumber</th>
              <th scope="col">Start Block Time</th>
              <th scope="col">End Block Time</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2256NU</td>
              <td>2023/02/07 08:00</td>
              <td>2023/02/07 19:00</td>
              <td>違停</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2256NU</td>
              <td>2023/02/07 08:00</td>
              <td>2023/02/07 19:00</td>
              <td>違停</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>2256NU</td>
              <td>2023/02/07 08:00</td>
              <td>2023/02/07 19:00</td>
              <td>違停</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BlackListPage;

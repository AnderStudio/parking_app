// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class CarEntryRecordPage extends Component {
  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">License Number</th>
              <th scope="col">Enter Time</th>
              <th scope="col">Exit Time</th>
              <th scope="col">Start Park Time</th>
              <th scope="col">End Park Time</th>
              <th scope="col">Status</th>
              <th scope="col">Park ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">2</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">3</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">4</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">5</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">6</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">7</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">8</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">9</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">10</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">11</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">12</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">13</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
            <tr>
            <th scope="row">14</th>
              <td>4158DR</td>
              <td>2023/02/07 00:00</td>
              <td>2023/02/07 23:59</td>
              <td>2023/02/07 00:05</td>
              <td>2023/02/07 23:48</td>
              <td>Parking</td>
              <td>A-002</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CarEntryRecordPage;

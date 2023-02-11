// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import DatePicker from "react-datepicker";


class ReserveBookPage extends Component {
  state = {
    license_num: "",
    parking_lot: "",
    start_time: new Date(),
    end_tiem: new Date()
  };

  handleLicenseChange = event => {
    this.setState({ license_num: event.target.value });
  };
  handleParkingLotChange = event => {
    this.setState({ parking_lot: event.target.value });
  };
  handleStartTimeChange = event => {
    this.setState({ start_time: event.target.value });
  };
  handleEndTimeChange = event => {
    this.setState({ end_time: event.target.value });
  };

  // async sendDataToBackend(data) {
  //   const response = await axios.post(`/insert_reservation/${user_id}/${park_id}/${license_num}/${eff_start_time}/${eff_end_time}`, data);
  //   console.log(response);
  // }

  async sendDataToBackend(data) {
    var user_id = 2;
    var park_id = 6;
    var license_num = "06AAAA"
    var eff_start_time = "2023-02-21 19:36:00"
    var eff_end_time = "2023-02-22 19:40:00"
    const response = await fetch("/insert_reservation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    var fake_data = {
      user_id: "2",
      park_id: "9",
      license_num: "07bbbb",
      eff_start_time: "2023-02-21 19:36:00",
      eff_end_time: "2023-02-23 19:36:00"
    }
    this.sendDataToBackend(fake_data)
  };

  render() {
    return (
      <div className="container">
        <h1>預約</h1>

        <div className="input-group mx-auto my-auto ">
          <input 
            type="text"
            value={this.state.license_num}
            onChange={this.handleLicenseChange}
            className="form-control"
            placeholder="請輸入車牌"
            aria-label="lisence_num"
            aria-describedby="basic-addon2" />
        </div>

        <div className="justify-content-center mx-5 my-5">
          <select value={this.parking_lot} onChange={this.handleParkingLotChange}>
            <option value="">選擇停車場</option>
            <option value="apple">A</option>
          </select>
        </div>

        <div className="mx-5 my-5">
          <form action="/action_page.php">
            <label>預計自</label>
            <input type="datetime-local" id="starttime" name="starttime" value={this.state.start_time} onChange={this.handleStartTimeChange}/>
          </form>
        </div>

        <div className="mx-5 my-5">
          <form action="/action_page.php">
            <label>停放至</label>
            <input type="datetime-local" id="endtime" name="endtime" value={this.state.end_time} onChange={this.handleEndTimeChange}/>
          </form>
        </div>

        <div className="d-flex flex-column mx-5 my-5">
            <Link onClick={this.handleSubmit} to="/Reserve" style={{display: 'contents'}}>
              <button className="btn btn-danger btn-lg" type="primary">確認</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default ReserveBookPage;
// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";


class ReserveBookPage extends Component {
  state = {
    license_num: "",
    parking_lot: "",
    start_time: new Date(),
    end_time: new Date()
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
    if (json.result === "blacklist"){
      console.log("in blacklist");
    }
    if (json.result === "full"){
      console.log("目前車位已滿");
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    var data = {
      user_id: 2,
      parking_lot: this.state.parking_lot,
      license_num: this.state.license_num,
      eff_start_time: this.state.start_time,
      eff_end_time: this.state.end_time
    }
    console.log(data)
    this.sendDataToBackend(data)
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
            <label>預計自 </label>
            <input type="datetime-local" id="starttime" name="starttime" value={this.state.start_time} onChange={this.handleStartTimeChange}/>
          </form>
        </div>

        <div className="mx-5 my-5">
          <form action="/action_page.php">
            <label>停放至 </label>
            <input type="datetime-local" id="endtime" name="endtime" value={this.state.end_time} onChange={this.handleEndTimeChange}/>
          </form>
        </div>

        <div className="d-flex flex-column mx-5 my-5">
            <Link onClick={this.handleSubmit} to="/Reserve" style={{display: 'contents'}}>
              <button className="btn btn-lg mx-3 my-3 btn-outline-dark" type="primary">確認</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default ReserveBookPage;
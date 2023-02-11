// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

function FindCarPage() {

  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState(message);

  const [data, setdata] = useState({});
  ///////////////////////////////////////////////////
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(message)
  };

  const handleClick = (event) => {
    // 👇 "message" stores input field value
    setUpdated(message);
    console.log(message);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/my_car_parking_space/${updated}`)
       const newData = await response.json()
       setdata(newData)
    };
    fetchData();

    // // Using fetch to fetch the api from
    // // flask server it will be redirected to proxy
    // fetch(`/my_car_parking_space/${updated}`).then((res) =>
    //   res.json().then((data) => {
    //     // Setting a data from api
    //     setdata(data)
    //   }, [i])
    // );
  }, [updated]);

  console.log(data)
  //if (updated !== "") {
  //  if (data !== false) {
      return (
        <div>
          <h1>Find My Car</h1>
          <div className="input-group mb-3 d-flex flex-column">
            <div className="d-flex flex-row justify-content-center">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => { setMessage(""); setUpdated(""); }}>Clear</button>
              <input type="text" id="message" name="message" className="form-control w-50" placeholder="License plate number" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => setMessage(e.target.value)} />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Go</button>
            </div>
            <div className="d-flex flex-column justify-content-center vh-50">
              <h3>停車場: {data["parking_lot"]}</h3>
              <h3>車位: {data["space_num"]}</h3>
              <h3>已停放時間: </h3>
            </div>
          </div>
        </div>
      );
  //  }
  //}

  // return (
  //   <div>
  //     <h1>Find My Car</h1>
  //     <div className="input-group mb-3 d-flex flex-column">
  //       <div className="d-flex flex-row justify-content-center">
  //         <input type="text" id="message" name="message" className="form-control w-50" placeholder="License plate number" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => setMessage(e.target.value)} />
  //         <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Go</button>
  //       </div>

  //     </div>
  //   </div>
  //);
  //////////////////////////////////////////////////
}

export default FindCarPage;

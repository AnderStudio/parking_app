// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

function ParkingPage() {
  const [data, setdata] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/parking_remain_spaces").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          A: data.A,
          B: data.B,
          C: data.C,
          D: data.D,
        });
      })
    );
  }, []);
  //console.log(data.A);
  return (
    <div>
      <h1>Parking</h1>
      <nav className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center justify-content-between">
          <div className="d-flex vw-100 justify-content-center pb-5 pt-5">
            <Link to="/FindCarA">
              <button className="btn btn-outline-dark" type="primary"  style={{width: "400px", height: "50px", fontSize: "26px"}}>
                Ａ區(餘{data.A})
              </button>
            </Link>
            <Link to="/MapPageA">
              <button className="btn btn-outline-success" type="primary" style={{height: "50px", fontSize: "26px"}}>
                導航到A區
              </button>
            </Link>
          </div>
          <div className="d-flex vw-100 justify-content-center pb-5">
            <Link to="/FindCarB">
              <button className="btn btn-outline-dark" type="primary" style={{width: "400px", height: "50px", fontSize: "26px"}}>
                B區(餘{data.B})
              </button>
            </Link>
            <Link to="/MapPageB">
              <button className="btn btn-outline-success" type="primary" style={{height: "50px", fontSize: "26px"}}>
                導航到B區
              </button>
            </Link>
          </div>
          <div className="d-flex vw-100 justify-content-center pb-5">
            <Link to="/FindCarC">
              <button className="btn btn-outline-dark" type="primary" style={{width: "400px", height: "50px", fontSize: "26px"}}>
                C區(餘{data.C})
              </button>
            </Link>
            <Link to="/MapPageC">
              <button className="btn btn-outline-success" type="primary" style={{height: "50px", fontSize: "26px"}}>
                導航到C區
              </button>
            </Link>
          </div>
          <div className="d-flex vw-100 justify-content-center pb-5">
            <Link to="/FindCarD">
              <button className="btn btn-outline-dark" type="primary" style={{width: "400px", height: "50px", fontSize: "26px"}}>
                D區(餘{data.D})
              </button>
            </Link>
            <Link to="/MapPageD">
              <button className="btn btn-outline-success" type="primary" style={{height: "50px", fontSize: "26px"}}>
                導航到D區
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default ParkingPage;

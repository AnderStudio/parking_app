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
      <h1 className="mt-5">車位剩餘數量與導航</h1>
      <nav className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center justify-content-between">
          <div className="d-flex vw-100 justify-content-center pb-5 pt-5 mt-5">
            <Link to="/FindCarA">
              <button className="rounded-lg btn btn1 white-text1" type="primary"  style={{width: "400px", height: "50px", fontSize: "26px"}}>
              <p>Ａ區  (餘{data.A})</p>
              </button>
            </Link>
            <Link to="/MapPageA">
              <button className="rounded-lg btn btn2 white-text" type="primary" style={{height: "50px", fontSize: "26px"}}>
              <p>導航到A區</p>
              </button>
            </Link>
          </div>
          <div className="d-flex vw-100 justify-content-center pb-5">
            <Link to="/FindCarB">
              <button className="rounded-lg btn btn1 white-text1" type="primary" style={{width: "400px", height: "50px", fontSize: "26px"}}>
              <p>B區  (餘{data.B})</p>
              </button>
            </Link>
            <Link to="/MapPageB">
              <button className="rounded-lg btn btn2 white-text" type="primary" style={{height: "50px", fontSize: "26px"}}>
              <p>導航到B區</p>
              </button>
            </Link>
          </div>
          <div className="d-flex vw-100 justify-content-center pb-5">
            <Link to="/FindCarC">
              <button className="rounded-lg btn btn1 white-text1" type="primary" style={{width: "400px", height: "50px", fontSize: "26px"}}>
              <p>C區  (餘{data.C})</p>
              </button>
            </Link>
            <Link to="/MapPageC">
              <button className="rounded-lg btn btn2 white-text" type="primary" style={{height: "50px", fontSize: "26px"}}>
              <p>導航到C區</p>
              </button>
            </Link>
          </div>
          <div className="d-flex vw-100 justify-content-center pb-5">
            <Link to="/FindCarD">
              <button className="rounded-lg btn btn1 white-text1" type="primary" style={{width: "400px", height: "50px", fontSize: "26px"}}>
              <p>D區  (餘{data.D})</p>
              </button>
            </Link>
            <Link to="/MapPageD">
              <button className="rounded-lg btn btn2 white-text" type="primary" style={{height: "50px", fontSize: "26px"}}>
                <p>導航到D區</p>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default ParkingPage;

// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";

class ReservePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>預約空車位</h1>
          <h2>已預約 車位-時段</h2>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">A001</h5>
            <p className="card-subtitle mb-2 text-muted">2/1</p>
            <p className="card-text">0:00 ~ 2:00</p>
            <a href="#" className="btn btn-primary">Delete</a>
          </div>
        </div>


        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>ok</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>



        <nav className="d-flex flex-column">
          <Link to="/ReserveBook">
            <button className="e-button" type="primary">新增預約</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default ReservePage;

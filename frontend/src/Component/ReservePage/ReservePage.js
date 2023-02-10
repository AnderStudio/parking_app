// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import ReserveCardList from './ReserveCardList';


const ReservePage = () => {
  const [cards, setCards] = useState([]);
  const user_id = 2

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/reservation/${user_id}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (cards == false) {
    return (<div>Loading...</div>);
  }

  return (
    <div className="container">
      <h1>預約空車位</h1>
      <h2>已預約 車位-時段</h2>   
      <ReserveCardList cards={cards} />
      <Link to="/ReserveBook">
      <button className="btn btn-danger btn-lg mx-3 my-3">+ 新稱預約</button>
      </Link>
    </div>
  );
};

export default ReservePage;
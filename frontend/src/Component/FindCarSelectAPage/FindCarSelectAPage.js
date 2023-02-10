// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import classNames from "classnames";

function FindCarSelectAPage() {

  const [data, setdata] = useState({
    A_parking_lot: []
  });

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy

    fetch("/A_parking_spaces").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          A_parking_lot: data.A
        })
      })
    );
  }, []);

  if (data.A_parking_lot == false) {
    return (<div>Loading...</div>);
  }
  console.log(data.A_parking_lot[99]);

  var empty_spaces = 0;
  for(let i = 0; i < 100; i++){
    if(data.A_parking_lot[i]["is_empty"] == true)
      empty_spaces += 1;
  }

  const isBackgroundRed = true;
  let lists = [];

  for (let i = 0; i < 100; i += 4) {
    lists.push(
      
      <div className="d-flex flex-row vw-100 justify-content-around" key={i}>
        <div className={classNames("border border-3 w-25 m-3", data.A_parking_lot[i]['is_empty'] == true ? 'background-green' : 'background-red')} key={i} >A-{i}</div>
        <div className={classNames("border border-3 w-25 m-3", data.A_parking_lot[i+1]['is_empty'] == true ? 'background-green' : 'background-red')} key={i+1} >A-{i+1}</div>
        <div className={classNames("border border-3 w-25 m-3", data.A_parking_lot[i+2]['is_empty'] == true ? 'background-green' : 'background-red')} key={i+2} >A-{i+2}</div>
        <div className={classNames("border border-3 w-25 m-3", data.A_parking_lot[i+3]['is_empty'] == true ? 'background-green' : 'background-red')} key={i+3} >A-{i+3}</div>
      </div>
    )
  }

  return (
    <div>
      <h1>A 區的車位剩餘{empty_spaces}</h1>
      
      <div className='d-flex flex-row flex-wrap border-4 min-vw-100'>
        {lists}
      </div>
    </div>

  );

}

export default FindCarSelectAPage;

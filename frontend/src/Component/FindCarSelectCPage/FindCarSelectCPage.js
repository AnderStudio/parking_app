// Importing modules
import React, { useState, useEffect, Component } from "react";
import "../../App.css";
import classNames from "classnames";

function FindCarSelectCPage() {

  const [data, setdata] = useState({
    C_parking_lot: []
  });

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy

    fetch("/C_parking_spaces").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          C_parking_lot: data.C
        })
      })
    );
  }, []);

  if (data.C_parking_lot == false) {
    return (<div>Loading...</div>);
  }
  console.log(data.C_parking_lot[99]);

  var empty_spaces = 0;
  for (let i = 0; i < 100; i++) {
    if (data.C_parking_lot[i]["is_empty"] == true)
      empty_spaces += 1;
  }
  const isBackgroundRed = true;
  let lists = [];

  for (let i = 0; i < 100; i += 4) {
    lists.push(

      <div className="d-flex flex-row vw-100 justify-content-around" key={i}>
        <div className={classNames("border border-3 w-25 m-3", data.C_parking_lot[i]['is_empty'] == true ? 'background-green' : 'background-red')} key={i} >C-{i}</div>
        <div className={classNames("border border-3 w-25 m-3", data.C_parking_lot[i + 1]['is_empty'] == true ? 'background-green' : 'background-red')} key={i + 1} >C-{i + 1}</div>
        <div className={classNames("border border-3 w-25 m-3", data.C_parking_lot[i + 2]['is_empty'] == true ? 'background-green' : 'background-red')} key={i + 2} >C-{i + 2}</div>
        <div className={classNames("border border-3 w-25 m-3", data.C_parking_lot[i + 3]['is_empty'] == true ? 'background-green' : 'background-red')} key={i + 3} >C-{i + 3}</div>
      </div>
    )
  }

  return (
    <div>
      <h1>C 區的車位剩餘{empty_spaces}</h1>
      <div className='d-flex flex-row flex-wrap border-4 min-vw-100'>
        {lists}
      </div>
    </div>
  );

}

export default FindCarSelectCPage;

// Importing modules
import React, { useState, useEffect, Component} from "react";
import "../../App.css";

function FindCarSelectBPage() {
  
  const [data, setdata] = useState({
		B_parking_lot: []
	});

  useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy

		fetch("/B_parking_spaces").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					B_parking_lot: data.B
				})
			})
    );
	}, []);

  if(data.B_parking_lot == false){
    return (<div>Loading...</div>);
  }
  console.log(data.B_parking_lot[99]);
  
  var empty_spaces = 0;
  for(let i = 0; i < 100; i++){
    if(data.B_parking_lot[i]["is_empty"] == true)
      empty_spaces += 1;
  }
  return (
    <div>
        <h1>B 區的車位剩餘{empty_spaces}</h1>
        <h1>B-{data.B_parking_lot[0]["id"]} 車位狀態: {data.B_parking_lot[0]["is_empty"]}</h1>
    </div>
  );  

}

export default FindCarSelectBPage;

// Importing modules
import React, { useState, useEffect, Component} from "react";
import "../../App.css";

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

  if(data.A_parking_lot == false){
    return (<div>Loading...</div>);
  }
  console.log(data.A_parking_lot[99]);
  
  var empty_spaces = 0;
  for(let i = 0; i < 100; i++){
    if(data.A_parking_lot != null && data.A_parking_lot[i]["is_empty"] == true)
      empty_spaces += 1;
  }

  return (
    <div>
        <h1>A 區的車位剩餘{empty_spaces}</h1>
        <h1>A-{data.A_parking_lot[0]["id"]} 車位狀態: {data.A_parking_lot[0]["is_empty"]}</h1>
    </div>
  );  

}

export default FindCarSelectAPage;

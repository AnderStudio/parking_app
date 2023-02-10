// Importing modules
import React, { useState, useEffect, Component} from "react";
import "../../App.css";

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

  if(data.C_parking_lot == false){
    return (<div>Loading...</div>);
  }
  console.log(data.C_parking_lot[99]);
  
  var empty_spaces = 0;
  for(let i = 0; i < 100; i++){
    if(data.C_parking_lot[i]["is_empty"] == true)
      empty_spaces += 1;
  }
  return (
    <div>
        <h1>C 區的車位剩餘{empty_spaces}</h1>
        <h1>C-{data.C_parking_lot[0]["id"]} 車位狀態: {data.C_parking_lot[0]["is_empty"]}</h1>
    </div>
  );  

}

export default FindCarSelectCPage;

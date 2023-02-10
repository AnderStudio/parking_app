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
				});
			})
		);
	}, []);
console.log(data.A_parking_lot);
console.log(data);

  var empty_spaces = 0;
  for(var i = 0; i < 100; i++){
    if(data.A_parking_lot[i]["is_empty"])
      empty_spaces += 1;
  }
  return (
    <div>
        <h1>A 區的車位剩餘{empty_spaces}</h1>
    </div>
  );
  
}

export default FindCarSelectAPage;

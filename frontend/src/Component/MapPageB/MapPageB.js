import React, { useState, useEffect } from "react";

const MapPageB = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [map, setMap] = useState(null);
  const [directionsDisplay, setDirectionsDisplay] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 }, //24.779788318014052, 120.99220143323566
      zoom: 11,
    });
    const directionsDisplay = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();

    setMap(map);
    setDirectionsDisplay(directionsDisplay);
    setDirectionsService(directionsService);

    directionsDisplay.setMap(map);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    directionsService.route(
      {
        origin: start,
        destination: destination,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          console.error(`Directions request failed due to ${status}`);
        }
      }
    );
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div id="map" style={{ height: "100%", width: "100%" }} />
      <form onSubmit={handleSubmit}>
        <div>你好</div>
        <div>你好</div>
        <div>你好</div>
        <label>
          起點：
          <input
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <br />
        <label>
          目的地：
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">
          開始導航
        </button>
      </form>
    </div>
  );
};

export default MapPageB;

/*
// Importing modules
import React, { useState, useEffect, Component } from "react";
import { Link, Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "../../App.css";

class MapPage extends Component {
    
    handleClick = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[1]}`);
    };
    handleClickA = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[0]}`);
    };
    handleClickB = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[1]}`);
    };
    handleClickC = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[2]}`);
    };
    handleClickD = () => {
        const parking_lot_locations = ["張忠謀大樓", "台積電 先進封測一廠", "台積電十二廠P6", "台灣積體電路製造十二廠P7"];
        const location = "San Francisco";
        window.open(`https://www.google.com/maps/search/${parking_lot_locations[3]}`);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClickA}>
                    Go to Parking Lot A
                </button>
                <button onClick={this.handleClickB}>
                    Go to Parking Lot B
                </button>
                <button onClick={this.handleClickC}>
                    Go to Parking Lot C
                </button>
                <button onClick={this.handleClickD}>
                    Go to Parking Lot D
                </button>
            </div>
            
        );
    }
}

export default MapPage;
*/

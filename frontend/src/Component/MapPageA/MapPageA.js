import React, { useState, useEffect } from "react";

const MapPageA = () => {
  const [start, setStart] = useState(""); // setStart("<something>") -> 設定 start
  const [destination, setDestination] = useState("24.773249, 121.012847");
  const [map, setMap] = useState(null);
  const [directionsDisplay, setDirectionsDisplay] = useState(null); //setDirectionsDisplay(...)-> 設定 directionsDisplay
  const [directionsService, setDirectionsService] = useState(null);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 24.773249, lng: 121.012847 },
      zoom: 9,
    });
    const directionsDisplay = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();

    setMap(map);
    setDirectionsDisplay(directionsDisplay);
    setDirectionsService(directionsService);

    directionsDisplay.setMap(map);

    // 取得使用者的目前位置
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStart(position.coords.latitude + ", " + position.coords.longitude);
      },
      (error) => console.error(error)
    );
  }, []);

  useEffect(() => {
    if (start === "") return;

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
  }, [start, destination, directionsService, directionsDisplay]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div id="map" style={{ height: "100%", width: "100%" }} />
      <div></div>
    </div>
  );
};

export default MapPageA;

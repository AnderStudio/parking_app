import React, { useState, useEffect } from "react";

const MapPageA = () => {
  const [start, setStart] = useState({});
  const [destination, setDestination] = useState({
    lat: 24.773231316311634,
    lng: 121.01267742051924,
  });
  const [map, setMap] = useState(null);
  const [directionsDisplay, setDirectionsDisplay] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setStart({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: start,
      zoom: 9,
    });
    const directionsDisplay = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();

    setMap(map);
    setDirectionsDisplay(directionsDisplay);
    setDirectionsService(directionsService);

    directionsDisplay.setMap(map);
  }, [start]);

  useEffect(() => {
    if (!directionsService) {
      return;
    }
    directionsService.route(
      {
        origin: start,
        destination: destination,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          setRoute(response.routes[0].legs[0].steps);
          directionsDisplay.setDirections(response);
        } else {
          console.error(`Directions request failed due to ${status}`);
        }
      }
    );
  }, [directionsService, start, destination]);

  return (
    <div style={{ display: "flex" }}>
      <div id="map" style={{ height: "100vh", width: "100%", flex: 1 }} />
      <div
        style={{ width: "300px", padding: "20px", backgroundColor: "white" }}
      >
        <h3>Route Details</h3>
        <ul style={{ textAlign: "left" }}>
          {route.map((step, index) => (
            <li key={index}>
              {step.instructions.replace(/(<([^>]+)>)/gi, "")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapPageA;
